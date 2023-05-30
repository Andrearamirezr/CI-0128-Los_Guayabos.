using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IClienteMedioDeComunicaciónService
    {
        Task<IEnumerable<ClienteMedioDeComunicación>> Obtener();
        Task<ClienteMedioDeComunicación> GetByIdAsync(int id);
        Task AddAsync(ClienteMedioDeComunicación clienteMedioDeComunicación);
        Task<ClienteMedioDeComunicación> UpdateAsync(int id, ClienteMedioDeComunicación newClienteMedioDeComunicación);
        Task DeleteAsync(int id);
    }
}
