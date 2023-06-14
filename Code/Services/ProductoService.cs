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

        public async Task<Producto> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Productos.FindAsync(id);
            return result;
        }

        public async Task<Producto> UpdateAsync(int sku, Producto newProducto)
        {
            var producto = await _dbcontext.Productos.FindAsync(sku);
            producto.Id = newProducto.Id;
            producto.Sku = newProducto.Sku;
            producto.Nombre = newProducto.Nombre;
            producto.Familia = newProducto.Familia;
            producto.Categoria = newProducto.Categoria;
            producto.Color = newProducto.Color;
            producto.Descripcion = newProducto.Descripcion;
            producto.Dimensiones = newProducto.Dimensiones;
            producto.Peso = newProducto.Peso;
            producto.PesoReferencia = newProducto.PesoReferencia;
            producto.PrecioAlquiler = newProducto.PrecioAlquiler;
            producto.PrecioRetail = newProducto.PrecioRetail;
            producto.CantidadTotal = newProducto.CantidadTotal;
            producto.CantidadDisponible = newProducto.CantidadDisponible;
            producto.Lote = newProducto.Lote;
            //_dbcontext.Update(newProducto);
            await _dbcontext.SaveChangesAsync();
            return newProducto;
        }
    }
}
