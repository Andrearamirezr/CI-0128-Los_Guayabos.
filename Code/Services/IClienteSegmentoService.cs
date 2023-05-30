using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IClienteSegmentoService
    {
        Task<IEnumerable<ClienteSegmento>> Obtener();
        Task<ClienteSegmento> GetByIdAsync(int id);
        Task AddAsync(ClienteSegmento clienteSegmento);
        Task<ClienteSegmento> UpdateAsync(int id, ClienteSegmento newClienteSegmento);
        Task DeleteAsync(int id);
    }
}
