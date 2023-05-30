using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IPrioridadClienteService
    {
        Task<IEnumerable<PrioridadCliente>> Obtener();
        Task<PrioridadCliente> GetByIdAsync(int id);
        Task AddAsync(PrioridadCliente prioridadCliente);
        Task<PrioridadCliente> UpdateAsync(int id, PrioridadCliente newPrioridadCliente);
        Task DeleteAsync(int id);
    }
}