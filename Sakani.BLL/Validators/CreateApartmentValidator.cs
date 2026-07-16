using FluentValidation;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;

namespace Sakani.BLL.Validators
{
    public class CreateApartmentValidator : AbstractValidator<CreateApartmentDto>
    {
        public CreateApartmentValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(200).WithMessage("Title cannot exceed 200 characters.");

            RuleFor(x => x.Description)
                .NotEmpty().WithMessage("Description is required.")
                .MaximumLength(2000).WithMessage("Description cannot exceed 2000 characters.");

            RuleFor(x => x.MaxCapacity)
                .GreaterThan(0).WithMessage("Max capacity must be at least 1.");

            RuleFor(x => x.Location)
                .NotEmpty().WithMessage("Location is required.")
                .MaximumLength(300).WithMessage("Location cannot exceed 300 characters.");

            RuleFor(x => x.Price)
                .GreaterThanOrEqualTo(0).WithMessage("Price cannot be negative.");

            RuleFor(x => x.NoOfRooms)
                .GreaterThan(0).WithMessage("Number of rooms must be at least 1.");

            RuleFor(x => x.City)
                .NotEmpty().WithMessage("City is required.")
                .MaximumLength(100).WithMessage("City cannot exceed 100 characters.");

            RuleFor(x => x.DistanceKm)
                .GreaterThanOrEqualTo(0).WithMessage("Distance cannot be negative.");

            RuleFor(x => x.Floor)
                .GreaterThanOrEqualTo(0).WithMessage("Floor cannot be negative.");

            RuleFor(x => x.AreaSqm)
                .GreaterThan(0).WithMessage("Area must be greater than 0.");
        }
    }
}
