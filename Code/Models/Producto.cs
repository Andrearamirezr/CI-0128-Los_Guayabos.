using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Producto
{
    public int Id { get; set; }

    public string Sku { get; set; } = null!;

    public string? Nombre { get; set; }

    public string? Familia { get; set; }

    public string Categoria { get; set; } = null!;

    public string Color { get; set; } = null!;

    public string? Descripcion { get; set; }

    public string Dimensiones { get; set; } = null!;

    public double Peso { get; set; }

    public double PesoReferencia { get; set; }

    public double PrecioAlquiler { get; set; }

    public double PrecioRetail { get; set; }

    public int CantidadTotal { get; set; }

    public int? CantidadDisponible { get; set; }

    public int Lote { get; set; }
}
