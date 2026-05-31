using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using MimeKit;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class EmailSenderServices(IOptions<SmtpSettings> smtpSettings , IWebHostEnvironment env) : ISenderService
    {
        public async Task SendEmailAsync(string recipientEmail, string subject, string body)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(smtpSettings.Value.SenderName,
                                                    smtpSettings.Value.SenderEmail));
                message.To.Add(MailboxAddress.Parse(recipientEmail));
                message.Subject = subject;
                message.Body = new TextPart("html")
                {
                    Text = body
                };
                using (var client = new SmtpClient()) { 
                    await client.ConnectAsync(smtpSettings.Value.Server
                                             ,smtpSettings.Value.Port
                                             ,SecureSocketOptions.StartTls);
                    await client.AuthenticateAsync(smtpSettings.Value.UserName, smtpSettings.Value.Password);
                    await client.SendAsync(message);
                    await client.DisconnectAsync(true);
                }
            }
            catch(Exception ex) {
                throw new Exception($"Failed to send email: {ex.Message}", ex);
            }
        }
    }
}
