using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Stock
{
    public int CantidadTotal { get; set; }

    public int CantidadDisponible { get; set; }

    public int ReservadoPorUnidad { get; set; }

    public int DevueltoPorUnidad { get; set; }

    public int UsadoPorUnidad { get; set; }

    public int SinUsarPorUnidad { get; set; }

    public int IdProducto { get; set; }

    public virtual Producto IdProductoNavigation { get; set; } = null!;
}
