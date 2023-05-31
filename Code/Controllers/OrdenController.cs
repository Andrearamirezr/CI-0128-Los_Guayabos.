using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenController : ControllerBase
    {
        private readonly IOrdenService _service;

        public OrdenController(IOrdenService service)
        {
            _service = service;
        }

        // Obtener todos los roles
        [HttpGet]
        [Route("Obtener")]
        public async Task<IActionResult> Obtener()
        {
            var data = await _service.Obtener();
            return StatusCode(StatusCodes.Status200OK, data);
        }

        // Ver una orden
        [HttpGet]
        [Route("Ver/{consecutivo:int}")]
        public async Task<IActionResult> Ver(int consecutivo)
        {
            var client = await _service.GetByIdAsync(consecutivo);
            return StatusCode(StatusCodes.Status200OK, client);
        }

        // Agregar una orden
        [HttpPost]
        [Route("Agregar")]
        public async Task<IActionResult> Agregar([FromBody] Orden request)
        {
            await _service.AddAsync(request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Editar una orden
        [HttpPut]
        [Route("Editar/{consecutivo:int}")]
        public async Task<IActionResult> Editar([FromBody] Orden request, int consecutivo)
        {
            await _service.UpdateAsync(consecutivo, request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Eliminar una orden
        [HttpDelete]
        [Route("Eliminar/{consecutivo:int}")]
        public async Task<IActionResult> Eliminar(int consecutivo)
        {
            await _service.DeleteAsync(consecutivo);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
