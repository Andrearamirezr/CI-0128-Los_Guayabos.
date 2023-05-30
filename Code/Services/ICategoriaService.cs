using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface ICategoriaService
    {
        Task<IEnumerable<Categoria>> Obtener();
        Task<Categoria> GetByIdAsync(int id);
        Task AddAsync(Categoria categoria);
        Task<Categoria> UpdateAsync(int id, Categoria newCategoria);
        Task DeleteAsync(int id);
    }
}
