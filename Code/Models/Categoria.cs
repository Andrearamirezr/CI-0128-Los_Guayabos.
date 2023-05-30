using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Categoria
{
    public int IdCategoria { get; set; }

    public int CategoriaProducto { get; set; }

    public int IdProducto { get; set; }

    public virtual Producto IdProductoNavigation { get; set; } = null!;
}
