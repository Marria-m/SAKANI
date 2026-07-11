using FluentValidation;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;

namespace Sakani.BLL.Core.Validation
{
    public class OwnerApartmentRequestDtoValidator : AbstractValidator<OwnerApartmentRequestDto>
    {
        public OwnerApartmentRequestDtoValidator()
        {
            RuleFor(a => a.Title)
                .NotEmpty()
                .WithMessage("Title is required.")
                .MaximumLength(200)
                .WithMessage("Title must not exceed 200 characters.");

            RuleFor(a => a.Description)
                .NotEmpty()
                .WithMessage("Description is required.")
                .MaximumLength(2000)
                .WithMessage("Description must not exceed 2000 characters.");

            RuleFor(a => a.MaxCapacity)
                .GreaterThan(0)
                .WithMessage("Max capacity must be greater than 0.");

            RuleFor(a => a.CurrentOccupied)
                .GreaterThanOrEqualTo(0)
                .WithMessage("Current occupied capacity must be greater than or equal to 0.")
                .LessThanOrEqualTo(a => a.MaxCapacity)
                .WithMessage("Current occupied capacity cannot exceed max capacity.");

            RuleFor(a => a.Location)
                .NotEmpty()
                .WithMessage("Location is required.")
                .MaximumLength(300)
                .WithMessage("Location must not exceed 300 characters.");

            RuleFor(a => a.Price)
                .GreaterThan(0)
                .WithMessage("Price must be greater than 0.");

            RuleFor(a => a.NoOfRooms)
                .GreaterThan(0)
                .WithMessage("Number of rooms must be greater than 0.");

            RuleFor(a => a.City)
                .NotEmpty()
                .WithMessage("City is required.")
                .MaximumLength(100)
                .WithMessage("City must not exceed 100 characters.");

            RuleFor(a => a.Status)
                .IsInEnum()
                .WithMessage("Invalid status.");

            RuleFor(a => a.GenderPolices)
                .IsInEnum()
                .WithMessage("Invalid gender policies.");

            RuleFor(a => a.OwnerId)
                .GreaterThan(0)
                .WithMessage("Owner ID is required and must be valid.");

            RuleForEach(a => a.Media)
                .SetValidator(new ApartmentMediaDtoValidator());

            RuleForEach(a => a.Amenities)
                .SetValidator(new AmenitiesDtoValidator());
        }
    }
}
