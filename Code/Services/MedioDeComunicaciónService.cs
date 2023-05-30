using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class MedioDeComunicaciónService : IMedioDeComunicaciónService
    {
        private readonly FicusDbContext _dbcontext;

        public MedioDeComunicaciónService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(MedioDeComunicación medioDeComunicación)
        {
            await _dbcontext.MedioDeComunicacións.AddAsync(medioDeComunicación);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var medioDeComunicación = await _dbcontext.MedioDeComunicacións.FindAsync(id);

            _dbcontext.MedioDeComunicacións.Remove(medioDeComunicación);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<MedioDeComunicación>> Obtener()
        {
            var result = await _dbcontext.MedioDeComunicacións.ToListAsync();
            return result;
        }

        public async Task<MedioDeComunicación> GetByIdAsync(int id)
        {
            var result = await _dbcontext.MedioDeComunicacións.FirstOrDefaultAsync(n => n.IdMedio == id);
            return result;
        }

        public async Task<MedioDeComunicación> UpdateAsync(int id, MedioDeComunicación newMedioDeComunicación)
        {
            var medioDeComunicación = await _dbcontext.MedioDeComunicacións.FindAsync(id);
            _dbcontext.Update(newMedioDeComunicación);
            await _dbcontext.SaveChangesAsync();
            return newMedioDeComunicación;
        }
    }
}
