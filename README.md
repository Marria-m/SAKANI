# 🏡 Sakani (سكني)

![.NET Core](https://img.shields.io/badge/.NET%20Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![Entity Framework Core](https://img.shields.io/badge/Entity%20Framework-3db1e6?style=for-the-badge&logo=dot-net&logoColor=white)
![MVC Architecture](https://img.shields.io/badge/Architecture-N--Tier%20MVC-success?style=for-the-badge)

**Sakani** is a housing search platform designed to help students, employees, and expats find suitable accommodation near their location — making one of the most stressful parts of relocating a whole lot easier.
 
---
 
## 💡 About the Project
 
Finding a place to stay near your university or workplace is genuinely hard. Sakani bridges the gap between people looking for housing and landlords or brokers who have spaces available.
 
**Two types of users:**
 
- **Landlord / Broker** — lists a property with details like location, capacity, price, and available amenities.
- **Tenant** — searches for available housing based on their location and preferences.
The platform isn't limited to students — it also serves employees, expats, or anyone who needs to find housing in an unfamiliar city.

---

## ✨ Features

### 👨‍💼 For Property Owners / Brokers:
* **Property Listing:** Easily list available rooms or apartments.
* **Property Details:** Define the capacity (number of people), price per person/room, location, and amenities.
* **Manage Listings:** Update or remove listings as availability changes.

### 🔍 For Tenants:
* **Advanced Search:** Find accommodations based on location, price, and availability.
* **Property Insights:** View detailed information about the property, including pictures, rules, and current capacity.
* **For Everyone:** Whether you're a student, a new employee, or relocating to a new city, Sakani helps you find the right place quickly and easily.

---

## 🛠️ Tech Stack & Architecture

Sakani is built with modern software engineering principles, ensuring scalability, maintainability, and clean code.

* **Framework:** ASP.NET Core MVC
* **Language:** C#
* **Database Access:** Entity Framework (EF) Core
* **Architecture:** Clean **N-Tier Architecture** (Presentation, Business Logic, Data Access, and Domain layers)
* **Design Patterns:** Repository Pattern, Unit of Work, Dependency Injection
  
---

## 🏗️ Project Structure
The solution is divided into highly decoupled layers:
* `Sakani.Web`: The Presentation layer (MVC Controllers, Views, and ViewModels).
* `Sakani.BLL` (Business Logic Layer): Contains the core business rules, services, and mapping profiles.
* `Sakani.DAL` (Data Access Layer): Handles database context, generic repositories, and Unit of Work.
* `Sakani.Domain`: Contains core entities, interfaces, and shared constants.

---

## 👥 Contributors

This project is proudly built and maintained by:

| <a href="https://github.com/Marria-m"><img src="https://avatars.githubusercontent.com/Marria-m" width="100px;" alt=""/><br /><sub><b>Mariam Ehab</b></sub></a><br /> | <a href="https://github.com/mazenabdelatee"><img src="https://avatars.githubusercontent.com/mazenabdelatee" width="100px;" alt=""/><br /><sub><b>Mazen Abdelateef</b></sub></a><br /> |
| :---: | :---: |
| Backend / Full-Stack .NET Developer | Backend / Full-Stack .NET Developer |
| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mariamehab1305/) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mazen-abdellateef-3b37172b6/) |
| [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/Marria-m) | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/mazenabdelatee) |

---
> *“Empowering students to find their home away from home.”*
