using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class OrdenService : IOrdenService
    {
        private readonly FicusDbContext _dbcontext;

        public OrdenService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Orden orden)
        {
            await _dbcontext.Ordens.AddAsync(orden);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var orden = await _dbcontext.Ordens.FindAsync(id);

            _dbcontext.Ordens.Remove(orden);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Orden>> Obtener()
        {
            var result = await _dbcontext.Ordens.ToListAsync();
            return result;
        }

        public async Task<Orden> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Ordens.FirstOrDefaultAsync(n => n.Id == id);
            return result;
        }

        public async Task<Orden> UpdateAsync(int id, Orden newOrden)
        {
            var orden = await _dbcontext.Ordens.FindAsync(id);
            orden.Id = newOrden.Id;
            orden.Consecutivo = newOrden.Consecutivo;
            orden.FechaAlquiler = newOrden.FechaAlquiler;
            orden.Cliente = newOrden.Cliente;
            orden.FeriaVerde = newOrden.FeriaVerde;
            orden.Estado = newOrden.Estado;
            orden.Productos = newOrden.Productos;
            orden.Ordenados = newOrden.Ordenados;
            orden.SinUsar = newOrden.SinUsar;
            orden.Usados = newOrden.Usados;
            orden.Devueltos = newOrden.Devueltos;
            orden.FechaFinalizacion = newOrden.FechaFinalizacion;
            orden.Monto = newOrden.Monto;
            //_dbcontext.Update(newOrden);
            await _dbcontext.SaveChangesAsync();
            return newOrden;
        }
    }
}
