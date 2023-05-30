using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

public partial class ClienteMedioDeComunicación
{
    public int IdCliente { get; set; }

    public int IdMedio { get; set; }

    public virtual Cliente IdClienteNavigation { get; set; } = null!;

    public virtual MedioDeComunicación IdMedioNavigation { get; set; } = null!;
}
