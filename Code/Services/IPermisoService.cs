using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IPermisoService
    {
        Task<IEnumerable<Permiso>> Obtener();
        Task<Permiso> GetByIdAsync(int id);
        Task AddAsync(Permiso permiso);
        Task<Permiso> UpdateAsync(int id, Permiso newPermiso);
        Task DeleteAsync(int id);
    }
}