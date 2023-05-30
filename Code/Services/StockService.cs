using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class StockService : IStockService
    {
        private readonly FicusDbContext _dbcontext;

        public StockService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Stock stock)
        {
            await _dbcontext.Stocks.AddAsync(stock);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var stock = await _dbcontext.Stocks.FindAsync(id);

            _dbcontext.Stocks.Remove(stock);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Stock>> Obtener()
        {
            var result = await _dbcontext.Stocks.ToListAsync();
            return result;
        }

        public async Task<Stock> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Stocks.FirstOrDefaultAsync(n => n.IdProducto == id);
            return result;
        }

        public async Task<Stock> UpdateAsync(int id, Stock newStock)
        {
            var stock = await _dbcontext.Stocks.FindAsync(id);
            _dbcontext.Update(newStock);
            await _dbcontext.SaveChangesAsync();
            return newStock;
        }
    }
}
