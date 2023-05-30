using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Color
{
    public int IdColor { get; set; }

    public string Color1 { get; set; } = null!;

    public int IdProducto { get; set; }

    public virtual Producto IdProductoNavigation { get; set; } = null!;
}
