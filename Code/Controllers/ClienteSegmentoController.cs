using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteSegmentoController : ControllerBase
    {
        private readonly IClienteSegmentoService _service;

        public ClienteSegmentoController(IClienteSegmentoService service)
        {
            _service = service;
        }

        // Obtener todas las clienteSegmentos
        [HttpGet]
        [Route("Obtener")]
        public async Task<IActionResult> Obtener()
        {
            var data = await _service.Obtener();
            return StatusCode(StatusCodes.Status200OK, data);
        }

        // Ver una clienteSegmento
        [HttpGet]
        [Route("Ver/{id:int}")]
        public async Task<IActionResult> Ver(int id)
        {
            var client = await _service.GetByIdAsync(id);
            return StatusCode(StatusCodes.Status200OK, client);
        }

        // Agregar una clienteSegmento
        [HttpPost]
        [Route("Agregar")]
        public async Task<IActionResult> Agregar([FromBody] ClienteSegmento request)
        {
            await _service.AddAsync(request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Editar una clienteSegmento
        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<IActionResult> Editar([FromBody] ClienteSegmento request, int id)
        {
            await _service.UpdateAsync(id, request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Eliminar una clienteSegmento
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            await _service.DeleteAsync(id);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
