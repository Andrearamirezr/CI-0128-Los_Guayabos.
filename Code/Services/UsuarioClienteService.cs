using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class UsuarioClienteService : IUsuarioClienteService
    {
        private readonly FicusDbContext _dbcontext;

        public UsuarioClienteService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(UsuarioCliente usuarioCliente)
        {
            await _dbcontext.UsuarioClientes.AddAsync(usuarioCliente);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var usuarioCliente = await _dbcontext.UsuarioClientes.FindAsync(id);

            _dbcontext.UsuarioClientes.Remove(usuarioCliente);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<UsuarioCliente>> Obtener()
        {
            var result = await _dbcontext.UsuarioClientes.ToListAsync();
            return result;
        }

        public async Task<UsuarioCliente> GetByIdAsync(int id)
        {
            var result = await _dbcontext.UsuarioClientes.FirstOrDefaultAsync(n => n.IdUsuario == id);
            return result;
        }

        public async Task<UsuarioCliente> UpdateAsync(int id, UsuarioCliente newUsuarioCliente)
        {
            var usuarioCliente = await _dbcontext.UsuarioClientes.FindAsync(id);
            _dbcontext.Update(newUsuarioCliente);
            await _dbcontext.SaveChangesAsync();
            return newUsuarioCliente;
        }
    }
}
