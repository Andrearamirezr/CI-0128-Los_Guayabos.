using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class UsuarioRolService : IUsuarioRolService
    {
        private readonly FicusDbContext _dbcontext;

        public UsuarioRolService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(UsuarioRol usuarioRol)
        {
            await _dbcontext.UsuarioRols.AddAsync(usuarioRol);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var usuarioRol = await _dbcontext.UsuarioRols.FindAsync(id);

            _dbcontext.UsuarioRols.Remove(usuarioRol);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<UsuarioRol>> Obtener()
        {
            var result = await _dbcontext.UsuarioRols.ToListAsync();
            return result;
        }

        public async Task<UsuarioRol> GetByIdAsync(int id)
        {
            var result = await _dbcontext.UsuarioRols.FirstOrDefaultAsync(n => n.IdUsuario == id);
            return result;
        }

        public async Task<UsuarioRol> UpdateAsync(int id, UsuarioRol newUsuarioRol)
        {
            var usuarioRol = await _dbcontext.UsuarioRols.FindAsync(id);
            _dbcontext.Update(newUsuarioRol);
            await _dbcontext.SaveChangesAsync();
            return newUsuarioRol;
        }
    }
}
