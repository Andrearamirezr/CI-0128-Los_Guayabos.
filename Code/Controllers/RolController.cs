using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {
        private readonly IRolService _service;

        public RolController(IRolService service)
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

        // Ver una rol
        [HttpGet]
        [Route("Ver/{id:int}")]
        public async Task<IActionResult> Ver(int id)
        {
            var client = await _service.GetByIdAsync(id);
            return StatusCode(StatusCodes.Status200OK, client);
        }

        // Agregar una rol
        [HttpPost]
        [Route("Agregar")]
        public async Task<IActionResult> Agregar([FromBody] Rol request)
        {
            await _service.AddAsync(request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Editar una rol
        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<IActionResult> Editar([FromBody] Rol request, int id)
        {
            await _service.UpdateAsync(id, request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Eliminar una rol
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            await _service.DeleteAsync(id);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
