using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Cliente
{
    public int Id { get; set; }

    public string Empresa { get; set; } = null!;

    public DateTime FechaCreacion { get; set; }

    public string Segmento { get; set; } = null!;

    public string Responsable { get; set; } = null!;

    public string Prioridad { get; set; } = null!;

    public string Estado { get; set; } = null!;

    public string Medio { get; set; } = null!;

    public string Contacto { get; set; } = null!;

    public int Telefono { get; set; }

    public string? Correo { get; set; }

    public string? PaginaWeb { get; set; }
}
