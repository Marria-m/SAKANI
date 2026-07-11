using FluentValidation;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;

namespace Sakani.BLL.Core.Validation
{
    public class AmenitiesDtoValidator : AbstractValidator<AmenitiesDto>
    {
        public AmenitiesDtoValidator()
        {
            RuleFor(a => a.Name)
                .NotEmpty().WithMessage("Amenity name is required.")
                .MaximumLength(100).WithMessage("Amenity name must not exceed 100 characters.");
        }
    }
}
