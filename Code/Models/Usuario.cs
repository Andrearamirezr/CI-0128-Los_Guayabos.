using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Contrasena { get; set; } = null!;

    public string? Correo { get; set; }
}
