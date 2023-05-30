using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IUsuarioRolService
    {
        Task<IEnumerable<UsuarioRol>> Obtener();
        Task<UsuarioRol> GetByIdAsync(int id);
        Task AddAsync(UsuarioRol usuarioRol);
        Task<UsuarioRol> UpdateAsync(int id, UsuarioRol newUsuarioRol);
        Task DeleteAsync(int id);
    }
}