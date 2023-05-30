using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class RolService : IRolService
    {
        private readonly FicusDbContext _dbcontext;

        public RolService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Rol rol)
        {
            await _dbcontext.Rols.AddAsync(rol);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var rol = await _dbcontext.Rols.FindAsync(id);

            _dbcontext.Rols.Remove(rol);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Rol>> Obtener()
        {
            var result = await _dbcontext.Rols.ToListAsync();
            return result;
        }

        public async Task<Rol> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Rols.FirstOrDefaultAsync(n => n.IdRol == id);
            return result;
        }

        public async Task<Rol> UpdateAsync(int id, Rol newRol)
        {
            var rol = await _dbcontext.Rols.FindAsync(id);
            _dbcontext.Update(newRol);
            await _dbcontext.SaveChangesAsync();
            return newRol;
        }
    }
}
