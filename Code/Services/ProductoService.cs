using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class ProductoService:IProductoService
    {
        private readonly FicusDbContext _dbcontext;

        public ProductoService(FicusDbContext context) 
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Producto producto)
        {
            await _dbcontext.Productos.AddAsync(producto);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int sku)
        {
            var producto = await _dbcontext.Productos.FindAsync(sku);
            
            _dbcontext.Productos.Remove(producto);
            await _dbcontext.SaveChangesAsync();
            
        }

        public async Task<IEnumerable<Producto>> Obtener()
        {
            var result = await _dbcontext.Productos.ToListAsync();
            return result;
        }

        public async Task<Producto> GetByIdAsync(int sku)
        {
            var result = await _dbcontext.Productos.FirstOrDefaultAsync(n => n.Sku == sku);
            return result;
        }

        public async Task<Producto> UpdateAsync(int sku, Producto newProducto)
        {
            var producto = await _dbcontext.Productos.FindAsync(sku);
            _dbcontext.Update(newProducto);
            await _dbcontext.SaveChangesAsync();
            return newProducto;
        }
    }
}
