using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class PrioridadCliente
{
    public int IdCliente { get; set; }

    public int? Baja { get; set; }

    public int? Media { get; set; }

    public int? Alta { get; set; }

    public virtual Cliente IdClienteNavigation { get; set; } = null!;
}
