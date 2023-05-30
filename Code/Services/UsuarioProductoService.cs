using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class UsuarioProductoService : IUsuarioProductoService
    {
        private readonly FicusDbContext _dbcontext;

        public UsuarioProductoService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(UsuarioProducto usuarioProducto)
        {
            await _dbcontext.UsuarioProductos.AddAsync(usuarioProducto);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var usuarioProducto = await _dbcontext.UsuarioProductos.FindAsync(id);

            _dbcontext.UsuarioProductos.Remove(usuarioProducto);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<UsuarioProducto>> Obtener()
        {
            var result = await _dbcontext.UsuarioProductos.ToListAsync();
            return result;
        }

        public async Task<UsuarioProducto> GetByIdAsync(int id)
        {
            var result = await _dbcontext.UsuarioProductos.FirstOrDefaultAsync(n => n.IdProducto == id);
            return result;
        }

        public async Task<UsuarioProducto> UpdateAsync(int id, UsuarioProducto newUsuarioProducto)
        {
            var usuarioProducto = await _dbcontext.UsuarioProductos.FindAsync(id);
            _dbcontext.Update(newUsuarioProducto);
            await _dbcontext.SaveChangesAsync();
            return newUsuarioProducto;
        }
    }
}
