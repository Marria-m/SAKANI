using Microsoft.AspNetCore.Http;

namespace Sakani.BLL.Core.Interfaces
{
    /// <summary>
    /// Handles file upload/delete operations for apartment media,
    /// profile images, and issue attachments. Files are stored
    /// in wwwroot/uploads/{subfolder}/.
    /// </summary>
    public interface IFileService
    {
        /// <summary>
        /// Uploads a file to wwwroot/uploads/{subfolder}/{guid}_{filename}.
        /// Returns the relative URL path (e.g., "/uploads/apartments/abc_photo.jpg").
        /// </summary>
        Task<string> UploadFileAsync(IFormFile file, string subfolder);

        /// <summary>
        /// Deletes a file by its relative path.
        /// Returns true if deleted successfully.
        /// </summary>
        bool DeleteFile(string relativePath);

        /// <summary>
        /// Returns the full physical path for a relative URL.
        /// </summary>
        string GetPhysicalPath(string relativePath);
    }
}
