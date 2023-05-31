using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IOrdenService
    {
        Task<IEnumerable<Orden>> Obtener();
        Task<Orden> GetByIdAsync(int id);
        Task AddAsync(Orden orden);
        Task<Orden> UpdateAsync(int id, Orden newOrden);
        Task DeleteAsync(int id);
    }
}