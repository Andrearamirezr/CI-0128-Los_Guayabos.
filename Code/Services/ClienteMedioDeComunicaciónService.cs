using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class ClienteMedioDeComunicaciónService : IClienteMedioDeComunicaciónService
    {
        private readonly FicusDbContext _dbcontext;

        public ClienteMedioDeComunicaciónService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(ClienteMedioDeComunicación clienteMedioDeComunicación)
        {
            await _dbcontext.ClienteMedioDeComunicacións.AddAsync(clienteMedioDeComunicación);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var clienteMedioDeComunicación = await _dbcontext.ClienteMedioDeComunicacións.FindAsync(id);

            _dbcontext.ClienteMedioDeComunicacións.Remove(clienteMedioDeComunicación);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<ClienteMedioDeComunicación>> Obtener()
        {
            var result = await _dbcontext.ClienteMedioDeComunicacións.ToListAsync();
            return result;
        }

        public async Task<ClienteMedioDeComunicación> GetByIdAsync(int id)
        {
            var result = await _dbcontext.ClienteMedioDeComunicacións.FirstOrDefaultAsync(n => n.IdCliente == id);
            return result;
        }

        public async Task<ClienteMedioDeComunicación> UpdateAsync(int id, ClienteMedioDeComunicación newClienteMedioDeComunicación)
        {
            var clienteMedioDeComunicación = await _dbcontext.ClienteMedioDeComunicacións.FindAsync(id);
            _dbcontext.Update(newClienteMedioDeComunicación);
            await _dbcontext.SaveChangesAsync();
            return newClienteMedioDeComunicación;
        }
    }
}
