using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Producto
{
    public int Sku { get; set; }

    public string? Nombre { get; set; }

    public string? Familia { get; set; }

    public string? Descripción { get; set; }

    public string Dimensiones { get; set; } = null!;

    public double Peso { get; set; }

    public double PesoReferencia { get; set; }

    public double PrecioAlquilerComercios { get; set; }

    public double PrecioAlquilerRetail { get; set; }

    public int Lote { get; set; }

    public virtual ICollection<Categoria> Categoria { get; set; } = new List<Categoria>();

    public virtual ICollection<Color> Colors { get; set; } = new List<Color>();
}
