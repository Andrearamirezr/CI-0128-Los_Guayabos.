using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface INombreUsuarioService
    {
        Task<IEnumerable<NombreUsuario>> Obtener();
        Task<NombreUsuario> GetByIdAsync(int id);
        Task AddAsync(NombreUsuario nombreUsuario);
        Task<NombreUsuario> UpdateAsync(int id, NombreUsuario newNombreUsuario);
        Task DeleteAsync(int id);
    }
}