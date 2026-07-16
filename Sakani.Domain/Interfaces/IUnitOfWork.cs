namespace Sakani.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        Task<int> SaveChangesAsync();
        IRepository<T> Repository<T>() where T : class;
    }
}
