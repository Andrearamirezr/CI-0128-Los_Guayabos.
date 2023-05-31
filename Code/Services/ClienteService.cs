using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class ClienteService : IClienteService
    {
        private readonly FicusDbContext _dbcontext;

        public ClienteService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Cliente cliente)
        {
            await _dbcontext.Clientes.AddAsync(cliente);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var cliente = await _dbcontext.Clientes.FindAsync(id);

            _dbcontext.Clientes.Remove(cliente);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Cliente>> Obtener()
        {
            var result = await _dbcontext.Clientes.ToListAsync();
            return result;
        }

        public async Task<Cliente> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Clientes.FirstOrDefaultAsync(n => n.Id == id);
            return result;
        }

        public async Task<Cliente> UpdateAsync(int id, Cliente newClient)
        {
            var client = await _dbcontext.Clientes.FindAsync(id);
            _dbcontext.Update(newClient);
            await _dbcontext.SaveChangesAsync();
            return newClient;
        }
    }
}
