using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class ClienteSegmentoService : IClienteSegmentoService
    {
        private readonly FicusDbContext _dbcontext;

        public ClienteSegmentoService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(ClienteSegmento clienteSegmento)
        {
            await _dbcontext.ClienteSegmentos.AddAsync(clienteSegmento);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var clienteSegmento = await _dbcontext.ClienteSegmentos.FindAsync(id);

            _dbcontext.ClienteSegmentos.Remove(clienteSegmento);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<ClienteSegmento>> Obtener()
        {
            var result = await _dbcontext.ClienteSegmentos.ToListAsync();
            return result;
        }

        public async Task<ClienteSegmento> GetByIdAsync(int id)
        {
            var result = await _dbcontext.ClienteSegmentos.FirstOrDefaultAsync(n => n.IdCliente == id);
            return result;
        }

        public async Task<ClienteSegmento> UpdateAsync(int id, ClienteSegmento newClienteSegmento)
        {
            var clienteSegmento = await _dbcontext.ClienteSegmentos.FindAsync(id);
            _dbcontext.Update(newClienteSegmento);
            await _dbcontext.SaveChangesAsync();
            return newClienteSegmento;
        }
    }
}
