using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VerificarUnidadesController : ControllerBase
    {
        private readonly IVerificarUnidadesService _service;

        public VerificarUnidadesController(IVerificarUnidadesService service)
        {
            _service = service;
        }

        // Llamada al procedimiento almacenado para verificar las unidades disponibles de un producto
        [HttpGet]
        [Route("Verificar")]
        public IActionResult VerificarUnidadesDisponibles(string sku, string fechaInicio, string fechaFinalizacion)
        {
            try
            {
                int unidadesDisponibles = _service.Verificar(sku, fechaInicio, fechaFinalizacion);
                return Ok(unidadesDisponibles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
