using FluentValidation;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using System;

namespace Sakani.BLL.Core.Validation
{
    public class ApartmentMediaDtoValidator : AbstractValidator<ApartmentMediaDto>
    {
        public ApartmentMediaDtoValidator()
        {
            RuleFor(m => m.MediaUrl)
                .NotEmpty()
                .WithMessage("Media URL is required.")
                .Must(uri => Uri.TryCreate(uri, UriKind.Absolute, out _))
                .WithMessage("Media URL must be a valid absolute URL.");

            RuleFor(m => m.MediaType)
                .IsInEnum()
                .WithMessage("Invalid media type.");
        }
    }
}
