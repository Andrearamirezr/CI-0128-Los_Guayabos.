using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Ficus_App.Models;
using Ficus_App.Services;

namespace Ficus_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductoService _service;

        public ProductoController(IProductoService service) 
        {
            _service = service;
        }

        // Obtener todos los estudiantes
        [HttpGet]
        [Route("Obtener")]
        public async Task<IActionResult> Obtener() {
            var data = await _service.Obtener();
            return StatusCode(StatusCodes.Status200OK, data);
        }

        // Ver un estudiante
        [HttpGet]
        [Route("Ver/{sku:int}")]
        public async Task<IActionResult> Ver(int sku)
        {
            var producto = await _service.GetByIdAsync(sku);
            return StatusCode(StatusCodes.Status200OK, producto);
        }

        // Agregar un estudiante
        [HttpPost]
        [Route("Agregar")]
        public async Task<IActionResult> Agregar([FromBody] Producto request)
        {
            await _service.AddAsync(request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Editar un estudiante
        [HttpPut]
        [Route("Editar/{sku:int}")]
        public async Task<IActionResult> Editar([FromBody] Producto request, int sku)
        {
            await _service.UpdateAsync(sku, request);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        // Eliminar un estudiante
        [HttpDelete]
        [Route("Eliminar/{sku:int}")]
        public async Task<IActionResult> Eliminar(int sku) {
            await _service.DeleteAsync(sku);
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
