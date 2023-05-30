using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedioDeComunicaciónController : ControllerBase
    {
        private readonly IMedioDeComunicaciónService _service;

        public MedioDeComunicaciónController(IMedioDeComunicaciónService service)
        {
            _service = service;
        }

        // Obtener todos los medioDeComunicaciónes
        [HttpGet]
        [Route("Obtener")]
        public async Task<IActionResult> Obtener()
        {
            var data = await _service.Obtener();
            return StatusCode(StatusCodes.Status200OK, data);
        }

        // Ver una medioDeComunicación
        [HttpGet]
        [Route("Ver/{id:int}")]
        public async Task<IActionResult> Ver(int id)
        {
            var client = await _service.GetByIdAsync(id);
            return StatusCode(StatusCodes.Status200OK, client);
        }

        // Agregar una medioDeComunicación
        [HttpPost]
        [Route("Agregar")]
        public async Task<IActionResult> Agregar([FromBody] MedioDeComunicación request)
        {
            await _service.AddAsync(request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Editar una medioDeComunicación
        [HttpPut]
        [Route("Editar/{id:int}")]
        public async Task<IActionResult> Editar([FromBody] MedioDeComunicación request, int id)
        {
            await _service.UpdateAsync(id, request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Eliminar una medioDeComunicación
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            await _service.DeleteAsync(id);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
