using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class UsuarioCliente
{
    public int? IdUsuario { get; set; }

    public int? IdCliente { get; set; }

    public virtual Usuario? IdUsuario1 { get; set; }

    public virtual Cliente? IdUsuarioNavigation { get; set; }
}
