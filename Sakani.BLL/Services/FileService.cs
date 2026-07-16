using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Sakani.BLL.Core.Interfaces;

namespace Sakani.BLL.Services
{
    /// <summary>
    /// Handles file upload and deletion for apartment media, profile images,
    /// and issue attachments. Files are stored in wwwroot/uploads/{subfolder}/.
    /// </summary>
    public class FileService : IFileService
    {
        private readonly IWebHostEnvironment _env;
        private readonly ILogger<FileService> _logger;

        // Allowed file extensions for upload
        private static readonly HashSet<string> AllowedImageExtensions = new(StringComparer.OrdinalIgnoreCase)
        {
            ".jpg", ".jpeg", ".png", ".webp", ".gif"
        };

        private static readonly HashSet<string> AllowedVideoExtensions = new(StringComparer.OrdinalIgnoreCase)
        {
            ".mp4", ".webm", ".mov"
        };

        private const long MaxFileSizeBytes = 10 * 1024 * 1024; // 10 MB

        public FileService(IWebHostEnvironment env, ILogger<FileService> logger)
        {
            _env = env;
            _logger = logger;
        }

        public async Task<string> UploadFileAsync(IFormFile file, string subfolder)
        {
            if (file == null || file.Length == 0)
                throw new ArgumentException("No file provided.");

            if (file.Length > MaxFileSizeBytes)
                throw new ArgumentException($"File size exceeds the maximum allowed size of {MaxFileSizeBytes / (1024 * 1024)} MB.");

            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!AllowedImageExtensions.Contains(extension) && !AllowedVideoExtensions.Contains(extension))
                throw new ArgumentException($"File type '{extension}' is not allowed. Allowed types: {string.Join(", ", AllowedImageExtensions.Union(AllowedVideoExtensions))}");

            // Build directory: wwwroot/uploads/{subfolder}/
            var uploadsDir = Path.Combine(_env.WebRootPath, "uploads", subfolder);
            Directory.CreateDirectory(uploadsDir);

            // Generate unique filename: {guid}_{original_filename}
            var uniqueFileName = $"{Guid.NewGuid():N}_{Path.GetFileName(file.FileName)}";
            var physicalPath = Path.Combine(uploadsDir, uniqueFileName);

            using (var stream = new FileStream(physicalPath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Return relative URL path
            var relativePath = $"/uploads/{subfolder}/{uniqueFileName}";
            _logger.LogInformation("File uploaded: {Path}", relativePath);
            return relativePath;
        }

        public bool DeleteFile(string relativePath)
        {
            try
            {
                var physicalPath = GetPhysicalPath(relativePath);
                if (File.Exists(physicalPath))
                {
                    File.Delete(physicalPath);
                    _logger.LogInformation("File deleted: {Path}", relativePath);
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to delete file: {Path}", relativePath);
                return false;
            }
        }

        public string GetPhysicalPath(string relativePath)
        {
            // relativePath: "/uploads/apartments/abc.jpg"
            // physicalPath: "wwwroot/uploads/apartments/abc.jpg"
            var trimmed = relativePath.TrimStart('/');
            return Path.Combine(_env.WebRootPath, trimmed.Replace('/', Path.DirectorySeparatorChar));
        }
    }
}
