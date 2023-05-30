using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class UsuarioRol
{
    public int? IdUsuario { get; set; }

    public int? IdRol { get; set; }

    public virtual Rol? IdRolNavigation { get; set; }

    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
