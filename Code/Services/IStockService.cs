using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IStockService
    {
        Task<IEnumerable<Stock>> Obtener();
        Task<Stock> GetByIdAsync(int id);
        Task AddAsync(Stock stock);
        Task<Stock> UpdateAsync(int id, Stock newStock);
        Task DeleteAsync(int id);
    }
}