using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class Cliente
{
    public int IdCliente { get; set; }

    public string Empresa { get; set; } = null!;

    public string Responsable { get; set; } = null!;

    public string NombreContacto { get; set; } = null!;

    public int Telefono { get; set; }

    public string? Correo { get; set; }

    public string? PaginaWeb { get; set; }

    public DateTime FechaCreacion { get; set; }
}
