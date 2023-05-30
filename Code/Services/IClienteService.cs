using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IClienteService
    {
        Task<IEnumerable<Cliente>> Obtener();
        Task<Cliente> GetByIdAsync(int id);
        Task AddAsync(Cliente cliente);
        Task<Cliente> UpdateAsync(int id, Cliente newCliente);
        Task DeleteAsync(int id);
    }
}
