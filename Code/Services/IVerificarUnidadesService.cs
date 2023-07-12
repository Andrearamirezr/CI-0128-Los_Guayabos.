using Ficus_App.Models;

namespace Ficus_App.Services
{
    public interface IVerificarUnidadesService
    {
        int Verificar(string sku, string fechaInicio, string fechaFinal);
    }
}
