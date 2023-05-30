using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IColorService
    {
        Task<IEnumerable<Color>> Obtener();
        Task<Color> GetByIdAsync(int id);
        Task AddAsync(Color color);
        Task<Color> UpdateAsync(int id, Color newColor);
        Task DeleteAsync(int id);
    }
}