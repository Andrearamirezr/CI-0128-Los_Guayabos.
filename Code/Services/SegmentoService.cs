using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class SegmentoService : ISegmentoService
    {
        private readonly FicusDbContext _dbcontext;

        public SegmentoService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Segmento segmento)
        {
            await _dbcontext.Segmentos.AddAsync(segmento);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var segmento = await _dbcontext.Segmentos.FindAsync(id);

            _dbcontext.Segmentos.Remove(segmento);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Segmento>> Obtener()
        {
            var result = await _dbcontext.Segmentos.ToListAsync();
            return result;
        }

        public async Task<Segmento> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Segmentos.FirstOrDefaultAsync(n => n.IdSegmento == id);
            return result;
        }

        public async Task<Segmento> UpdateAsync(int id, Segmento newSegmento)
        {
            var segmento = await _dbcontext.Segmentos.FindAsync(id);
            _dbcontext.Update(newSegmento);
            await _dbcontext.SaveChangesAsync();
            return newSegmento;
        }
    }
}
