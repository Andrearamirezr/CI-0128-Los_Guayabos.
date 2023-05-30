using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class ColorService : IColorService
    {
        private readonly FicusDbContext _dbcontext;

        public ColorService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Color color)
        {
            await _dbcontext.Colors.AddAsync(color);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var color = await _dbcontext.Colors.FindAsync(id);

            _dbcontext.Colors.Remove(color);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Color>> Obtener()
        {
            var result = await _dbcontext.Colors.ToListAsync();
            return result;
        }

        public async Task<Color> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Colors.FirstOrDefaultAsync(n => n.IdColor == id);
            return result;
        }

        public async Task<Color> UpdateAsync(int id, Color newColor)
        {
            var color = await _dbcontext.Colors.FindAsync(id);
            _dbcontext.Update(newColor);
            await _dbcontext.SaveChangesAsync();
            return newColor;
        }
    }
}
