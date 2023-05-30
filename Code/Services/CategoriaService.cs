using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Services
{
    public class CategoriaService : ICategoriaService
    {
        private readonly FicusDbContext _dbcontext;

        public CategoriaService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public async Task AddAsync(Categoria categoria)
        {
            await _dbcontext.Categoria.AddAsync(categoria);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var categoria = await _dbcontext.Categoria.FindAsync(id);

            _dbcontext.Categoria.Remove(categoria);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task<IEnumerable<Categoria>> Obtener()
        {
            var result = await _dbcontext.Categoria.ToListAsync();
            return result;
        }

        public async Task<Categoria> GetByIdAsync(int id)
        {
            var result = await _dbcontext.Categoria.FirstOrDefaultAsync(n => n.IdCategoria == id);
            return result;
        }

        public async Task<Categoria> UpdateAsync(int id, Categoria newCategoria)
        {
            var categoria = await _dbcontext.Categoria.FindAsync(id);
            _dbcontext.Update(newCategoria);
            await _dbcontext.SaveChangesAsync();
            return newCategoria;
        }
    }
}
