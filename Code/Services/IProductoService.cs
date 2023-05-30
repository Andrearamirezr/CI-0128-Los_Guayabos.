using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IProductoService
    {
        Task<IEnumerable<Producto>> Obtener();
        Task<Producto> GetByIdAsync(int sku);
        Task AddAsync(Producto producto);
        Task<Producto> UpdateAsync(int sku, Producto newProducto);
        Task DeleteAsync(int sku);
    }
}
