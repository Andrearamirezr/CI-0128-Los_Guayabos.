using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IUsuarioClienteService
    {
        Task<IEnumerable<UsuarioCliente>> Obtener();
        Task<UsuarioCliente> GetByIdAsync(int id);
        Task AddAsync(UsuarioCliente usuarioCliente);
        Task<UsuarioCliente> UpdateAsync(int id, UsuarioCliente newUsuarioCliente);
        Task DeleteAsync(int id);
    }
}
