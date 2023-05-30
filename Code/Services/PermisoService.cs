using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class PermisoService : IPermisoService
    {
        private readonly FicusDbContext _dbcontext;

        public PermisoService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Permiso permiso)
        {
            await _dbcontext.Permisos.AddAsync(permiso);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var permiso = await _dbcontext.Permisos.FindAsync(id);

            _dbcontext.Permisos.Remove(permiso);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Permiso>> Obtener()
        {
            var result = await _dbcontext.Permisos.ToListAsync();
            return result;
        }

        public async Task<Permiso> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Permisos.FirstOrDefaultAsync(n => n.IdRol == id);
            return result;
        }

        public async Task<Permiso> UpdateAsync(int id, Permiso newPermiso)
        {
            var permiso = await _dbcontext.Permisos.FindAsync(id);
            _dbcontext.Update(newPermiso);
            await _dbcontext.SaveChangesAsync();
            return newPermiso;
        }
    }
}
