using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IRolService
    {
        Task<IEnumerable<Rol>> Obtener();
        Task<Rol> GetByIdAsync(int id);
        Task AddAsync(Rol rol);
        Task<Rol> UpdateAsync(int id, Rol newRol);
        Task DeleteAsync(int id);
    }
}