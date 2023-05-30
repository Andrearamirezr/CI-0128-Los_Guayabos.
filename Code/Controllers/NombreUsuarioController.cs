using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NombreUsuarioController : ControllerBase
    {
        private readonly INombreUsuarioService _service;

        public NombreUsuarioController(INombreUsuarioService service)
        {
            _service = service;
        }

        // Obtener todos los nombreUsuarioes
        [HttpGet]
        [Route("Obtener")]
        public async Task<IActionResult> Obtener()
        {
            var data = await _service.Obtener();
            return StatusCode(StatusCodes.Status200OK, data);
        }

        // Ver una nombreUsuario
        [HttpGet]
        [Route("Ver/{id:int}")]
        public async Task<IActionResult> Ver(int id)
        {
            var client = await _service.GetByIdAsync(id);
            return StatusCode(StatusCodes.Status200OK, client);
        }

        // Agregar una nombreUsuario
        [HttpPost]
        [Route("Agregar")]
        public async Task<IActionResult> Agregar([FromBody] NombreUsuario request)
        {
            await _service.AddAsync(request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Editar una nombreUsuario
        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<IActionResult> Editar([FromBody] NombreUsuario request, int id)
        {
            await _service.UpdateAsync(id, request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Eliminar una nombreUsuario
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            await _service.DeleteAsync(id);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
