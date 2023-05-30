using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface ISegmentoService
    {
        Task<IEnumerable<Segmento>> Obtener();
        Task<Segmento> GetByIdAsync(int id);
        Task AddAsync(Segmento segmento);
        Task<Segmento> UpdateAsync(int id, Segmento newSegmento);
        Task DeleteAsync(int id);
    }
}