using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Orden
{
    public int Id { get; set; }

    public string Consecutivo { get; set; } = null!;

    public string FechaAlquiler { get; set; } = null!;

    public string Cliente { get; set; } = null!;

    public string FeriaVerde { get; set; } = null!;

    public string Estado { get; set; } = null!;

    public string Productos { get; set; } = null!;

    public string Ordenados { get; set; } = null!;

    public string SinUsar { get; set; } = null!;

    public string Usados { get; set; } = null!;

    public string Devueltos { get; set; } = null!;

    public string FechaFinalizacion { get; set; } = null!;

    public string Monto { get; set; } = null!;
}
