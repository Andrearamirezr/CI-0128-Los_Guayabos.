using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly FicusDbContext _dbcontext;

        public UsuarioService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Usuario usuario)
        {
            await _dbcontext.Usuarios.AddAsync(usuario);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var usuario = await _dbcontext.Usuarios.FindAsync(id);

            _dbcontext.Usuarios.Remove(usuario);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Usuario>> Obtener()
        {
            var result = await _dbcontext.Usuarios.ToListAsync();
            return result;
        }

        public async Task<Usuario> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Usuarios.FirstOrDefaultAsync(n => n.IdUsuario == id);
            return result;
        }

        public async Task<Usuario> UpdateAsync(int id, Usuario newUsuario)
        {
            var usuario = await _dbcontext.Usuarios.FindAsync(id);
            _dbcontext.Update(newUsuario);
            await _dbcontext.SaveChangesAsync();
            return newUsuario;
        }
    }
}

