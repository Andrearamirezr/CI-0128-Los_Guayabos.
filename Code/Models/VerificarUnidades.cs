using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Ficus_App.Models;

[Keyless]
public partial class VerificarUnidades
{
    public int UnidadesDisponibles { get; set; }

}
