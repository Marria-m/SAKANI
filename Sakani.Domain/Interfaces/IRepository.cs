using System.Linq.Expressions;

namespace Sakani.Domain.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetByIdAsync(int id);

        // Finds the first entity matching the predicate or null
        Task<T?> FindAsync(Expression<Func<T, bool>> predicate);
        Task<IEnumerable<T>> FindAllAsync(Expression<Func<T, bool>> predicate);
        IQueryable<T> Query();

        Task AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}