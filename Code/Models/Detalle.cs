using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Detalle
{
    public string Consecutivo { get; set; } = null!;

    public string Sku { get; set; } = null!;

    public int Ordenados { get; set; }

    public int Devueltos { get; set; }

    public int Usados { get; set; }

    public int SinUsar { get; set; }
}
