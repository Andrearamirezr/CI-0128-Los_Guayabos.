using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class UsuarioProducto
{
    public int IdProducto { get; set; }

    public int IdUsuario { get; set; }

    public virtual Producto IdProductoNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
