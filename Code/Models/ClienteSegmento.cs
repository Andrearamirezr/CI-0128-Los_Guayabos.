using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class ClienteSegmento
{
    public int IdCliente { get; set; }

    public int IdSegmento { get; set; }

    public virtual Cliente IdClienteNavigation { get; set; } = null!;

    public virtual Segmento IdSegmentoNavigation { get; set; } = null!;
}
