using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IUsuarioService
    {
        Task<IEnumerable<Usuario>> Obtener();
        Task<Usuario> GetByIdAsync(int id);
        Task AddAsync(Usuario usuario);
        Task<Usuario> UpdateAsync(int id, Usuario newUsuario);
        Task DeleteAsync(int id);
    }
}