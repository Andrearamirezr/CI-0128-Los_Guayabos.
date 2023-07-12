using Ficus_App.Data;
using Ficus_App.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Ficus_App.Services
{
    public class VerificarUnidadesService : IVerificarUnidadesService
    {
        private readonly FicusDbContext _dbcontext;

        public VerificarUnidadesService(FicusDbContext context)
        {
            _dbcontext = context;
        }

        public int Verificar(string sku, string fechaInicio, string fechaFinal)
        {
            var skuParameter = new SqlParameter("@sku", sku);
            var fechaInicioParameter = new SqlParameter("@fechaInicio", fechaInicio);
            var fechaFinalizacionParameter = new SqlParameter("@fechaFinalizacion", fechaFinal);

            var unidadesDisponiblesParameter = new SqlParameter
            {
                ParameterName = "@unidadesDisponibles",
                SqlDbType = System.Data.SqlDbType.Int,
                Direction = System.Data.ParameterDirection.Output
            };

            var parameters = new[] { skuParameter, fechaInicioParameter, fechaFinalizacionParameter, unidadesDisponiblesParameter };

            _dbcontext.Database.ExecuteSqlRaw(
                "EXEC @unidadesDisponibles = VerificarUnidadesDisponibles @sku, @fechaInicio, @fechaFinalizacion", parameters);
            var unidadesDisponibles = (int)unidadesDisponiblesParameter.Value;

            return unidadesDisponibles;
        }
    }
}

