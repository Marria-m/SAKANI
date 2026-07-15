using FluentValidation;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.Domain.Enums;

namespace Sakani.BLL.Core.Validation
{
    public class UpdateTenantProfileDtoValidator : AbstractValidator<UpdateTenantProfileDto>
    {
        public UpdateTenantProfileDtoValidator()
        {
            RuleFor(x => x.FirstName)
                .NotEmpty().WithMessage("First name cannot be empty.")
                .MaximumLength(50).WithMessage("First name must not exceed 50 characters.")
                .When(x => x.FirstName != null);

            RuleFor(x => x.LastName)
                .NotEmpty().WithMessage("Last name cannot be empty.")
                .MaximumLength(50).WithMessage("Last name must not exceed 50 characters.")
                .When(x => x.LastName != null);

            RuleFor(x => x.PhoneNumber)
                .Matches(@"^\+?[0-9]{10,15}$").WithMessage("Invalid phone number format. It should contain 10 to 15 digits.")
                .When(x => x.PhoneNumber != null);

            RuleFor(x => x.ProfileImageUrl)
                .MaximumLength(500).WithMessage("Profile image URL must not exceed 500 characters.")
                .When(x => x.ProfileImageUrl != null);

            RuleFor(x => x.Jop)
                .NotEmpty().WithMessage("Job is required for employees.")
                .MaximumLength(100).WithMessage("Job name must not exceed 100 characters.")
                .When(x => x.Roles == TenantRoles.Employee || x.Jop != null);

            RuleFor(x => x.Collage)
                .NotEmpty().WithMessage("College is required for students.")
                .MaximumLength(100).WithMessage("College name must not exceed 100 characters.")
                .When(x => x.Roles == TenantRoles.Studnet || x.Collage != null);

            RuleFor(x => x.Major)
                .NotEmpty().WithMessage("Major is required for students.")
                .MaximumLength(100).WithMessage("Major name must not exceed 100 characters.")
                .When(x => x.Roles == TenantRoles.Studnet || x.Major != null);

            RuleFor(x => x.UniversityYear)
                .NotEmpty().WithMessage("University year is required for students.")
                .MaximumLength(20).WithMessage("University year must not exceed 20 characters.")
                .When(x => x.Roles == TenantRoles.Studnet || x.UniversityYear != null);
    
            RuleFor(x => x.Bio)
                .MaximumLength(500).WithMessage("Bio must not exceed 500 characters.")
                .When(x => x.Bio != null);

            RuleFor(x => x.Budget)
                .GreaterThanOrEqualTo(0).WithMessage("Budget must be a non-negative number.")
                .When(x => x.Budget != null);

            RuleFor(x => x.Gender)
                .IsInEnum().WithMessage("Invalid gender option.")
                .When(x => x.Gender != null);

            RuleFor(x => x.Roles)
                .IsInEnum().WithMessage("Invalid tenant role option.")
                .When(x => x.Roles != null);
        }
    }
}
