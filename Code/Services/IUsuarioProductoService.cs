using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IUsuarioProductoService
    {
        Task<IEnumerable<UsuarioProducto>> Obtener();
        Task<UsuarioProducto> GetByIdAsync(int id);
        Task AddAsync(UsuarioProducto usuarioProducto);
        Task<UsuarioProducto> UpdateAsync(int id, UsuarioProducto newUsuarioProducto);
        Task DeleteAsync(int id);
    }
}