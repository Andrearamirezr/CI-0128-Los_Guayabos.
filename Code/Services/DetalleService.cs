using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class DetalleService : IDetalleService
    {
        private readonly FicusDbContext _dbcontext;

        public DetalleService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Detalle detalle)
        {
            await _dbcontext.Detalles.AddAsync(detalle);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int consecutivo)
        {
            var detalle = await _dbcontext.Detalles.FindAsync(consecutivo);

            _dbcontext.Detalles.Remove(detalle);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Detalle>> Obtener()
        {
            var result = await _dbcontext.Detalles.ToListAsync();
            return result;
        }

        public async Task<Detalle> GetByIdAsync(int consecutivo)
        {
            var result = await _dbcontext.Detalles.FirstOrDefaultAsync(n => n.Usados == consecutivo);
            return result;
        }

        public async Task<Detalle> UpdateAsync(int consecutivo, Detalle newDetalle)
        {
            var detalle = await _dbcontext.Detalles.FindAsync(consecutivo);
            _dbcontext.Update(newDetalle);
            await _dbcontext.SaveChangesAsync();
            return newDetalle;
        }
    }
}
