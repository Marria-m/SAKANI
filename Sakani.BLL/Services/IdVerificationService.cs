using Microsoft.AspNetCore.Http;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class IdVerificationService : IIdVerificationService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IFileService _fileService;
        private readonly IAiService _aiService;

        public IdVerificationService(
            IUnitOfWork unitOfWork,
            IFileService fileService,
            IAiService aiService)
        {
            _unitOfWork = unitOfWork;
            _fileService = fileService;
            _aiService = aiService;
        }

        public async Task<IdVerificationResultDto> VerifyOwnerIdAsync(int ownerId, IFormFile selfie, IFormFile idCard)
        {
            var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
            if (owner == null)
                throw new KeyNotFoundException("Owner not found.");

            // 1. Upload files
            var selfieUrl = await _fileService.UploadFileAsync(selfie, "profiles");
            var idCardUrl = await _fileService.UploadFileAsync(idCard, "profiles");

            var physicalSelfie = _fileService.GetPhysicalPath(selfieUrl);
            var physicalIdCard = _fileService.GetPhysicalPath(idCardUrl);

            // 2. Verify with AI
            var result = await _aiService.VerifyIdAsync(physicalSelfie, physicalIdCard);

            if (result != null && result.Match)
            {
                owner.IsVerified = true;
                owner.ProfileImageUrl = selfieUrl; // Update profile image with verified selfie
                _unitOfWork.Repository<Owner>().Update(owner);
                await _unitOfWork.SaveChangesAsync();
            }
            else
            {
                // Clean up uploads if verification fails to save space
                _fileService.DeleteFile(selfieUrl);
                _fileService.DeleteFile(idCardUrl);
            }

            return result ?? new IdVerificationResultDto { Error = "AI Verification failed to return a response." };
        }

        public async Task<bool> GetVerificationStatusAsync(int ownerId)
        {
            var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
            return owner?.IsVerified ?? false;
        }
    }
}
