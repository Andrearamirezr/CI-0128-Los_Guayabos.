using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class NombreUsuario
{
    public int? IdUsuario { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string Apellido2 { get; set; } = null!;

    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
