using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IDetalleService
    {
        Task<IEnumerable<Detalle>> Obtener();
        Task<Detalle> GetByIdAsync(int consecutivo);
        Task AddAsync(Detalle detalle);
        Task<Detalle> UpdateAsync(int consecutivo, Detalle newStock);
        Task DeleteAsync(int consecutivo);
    }
}