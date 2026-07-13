using System;

namespace Sakani.Domain.Enums
{
    [Flags]
    public enum NearbyServices
    {
        None = 0,
        Pharmacy = 1,
        Supermarket = 2,
        Transit = 4,
        Restaurant = 8
    }
}
