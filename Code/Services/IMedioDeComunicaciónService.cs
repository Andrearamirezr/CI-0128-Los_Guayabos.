using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IMedioDeComunicaciónService
    {
        Task<IEnumerable<MedioDeComunicación>> Obtener();
        Task<MedioDeComunicación> GetByIdAsync(int id);
        Task AddAsync(MedioDeComunicación medioDeComunicación);
        Task<MedioDeComunicación> UpdateAsync(int id, MedioDeComunicación newMedioDeComunicación);
        Task DeleteAsync(int id);
    }
}