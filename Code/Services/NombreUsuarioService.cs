using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class NombreUsuarioService : INombreUsuarioService
    {
        private readonly FicusDbContext _dbcontext;

        public NombreUsuarioService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(NombreUsuario nombreUsuario)
        {
            await _dbcontext.NombreUsuarios.AddAsync(nombreUsuario);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var nombreUsuario = await _dbcontext.NombreUsuarios.FindAsync(id);

            _dbcontext.NombreUsuarios.Remove(nombreUsuario);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<NombreUsuario>> Obtener()
        {
            var result = await _dbcontext.NombreUsuarios.ToListAsync();
            return result;
        }

        public async Task<NombreUsuario> GetByIdAsync(int id)
        {
            var result = await _dbcontext.NombreUsuarios.FirstOrDefaultAsync(n => n.IdUsuario == id);
            return result;
        }

        public async Task<NombreUsuario> UpdateAsync(int id, NombreUsuario newNombreUsuario)
        {
            var nombreUsuario = await _dbcontext.NombreUsuarios.FindAsync(id);
            _dbcontext.Update(newNombreUsuario);
            await _dbcontext.SaveChangesAsync();
            return newNombreUsuario;
        }
    }
}
