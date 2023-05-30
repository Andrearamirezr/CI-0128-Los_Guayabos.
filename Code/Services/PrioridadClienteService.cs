using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class PrioridadClienteService : IPrioridadClienteService
    {
        private readonly FicusDbContext _dbcontext;

        public PrioridadClienteService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(PrioridadCliente prioridadCliente)
        {
            await _dbcontext.PrioridadClientes.AddAsync(prioridadCliente);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var prioridadCliente = await _dbcontext.PrioridadClientes.FindAsync(id);

            _dbcontext.PrioridadClientes.Remove(prioridadCliente);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<PrioridadCliente>> Obtener()
        {
            var result = await _dbcontext.PrioridadClientes.ToListAsync();
            return result;
        }

        public async Task<PrioridadCliente> GetByIdAsync(int id)
        {
            var result = await _dbcontext.PrioridadClientes.FirstOrDefaultAsync(n => n.IdCliente == id);
            return result;
        }

        public async Task<PrioridadCliente> UpdateAsync(int id, PrioridadCliente newPrioridadCliente)
        {
            var prioridadCliente = await _dbcontext.PrioridadClientes.FindAsync(id);
            _dbcontext.Update(newPrioridadCliente);
            await _dbcontext.SaveChangesAsync();
            return newPrioridadCliente;
        }
    }
}
