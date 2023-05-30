using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Permiso
{
    public int? IdRol { get; set; }

    public bool? AgregarProducto { get; set; }

    public bool? EliminarProducto { get; set; }

    public bool? EditarUsuario { get; set; }

    public bool? AgregarOrden { get; set; }

    public bool? EditarOrden { get; set; }

    public bool? EliminarOrden { get; set; }

    public bool? AgregarCliente { get; set; }

    public bool? EditarCliente { get; set; }

    public virtual Rol? IdRolNavigation { get; set; }
}
