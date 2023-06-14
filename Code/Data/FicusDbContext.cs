using System;
using System.Collections.Generic;
using Ficus_App.Models;
using Microsoft.EntityFrameworkCore;

namespace Ficus_App.Data;

public partial class FicusDbContext : DbContext
{
    public FicusDbContext()
    {
    }

    public FicusDbContext(DbContextOptions<FicusDbContext> options): base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Detalle> Detalles { get; set; }

    public virtual DbSet<Orden> Ordens { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.ToTable("Cliente");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Contacto)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Empresa)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Estado)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FechaCreacion)
                .HasColumnType("date")
                .HasColumnName("Fecha creacion");
            entity.Property(e => e.Medio)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PaginaWeb)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Pagina Web");
            entity.Property(e => e.Prioridad)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Responsable)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Segmento)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Detalle>(entity =>
        {
            entity.ToTable("Detalle");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Consecutivo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.SinUsar).HasColumnName("Sin usar");
            entity.Property(e => e.Sku)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Orden>(entity =>
        {
            entity.ToTable("Orden");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Cliente)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Consecutivo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Devueltos)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Estado)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FechaAlquiler)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Fecha alquiler");
            entity.Property(e => e.FechaFinalizacion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Fecha finalizacion");
            entity.Property(e => e.FeriaVerde)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Feria verde");
            entity.Property(e => e.Monto)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ordenados)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Productos).HasColumnType("text");
            entity.Property(e => e.SinUsar)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Sin usar");
            entity.Property(e => e.Usados)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.ToTable("Producto");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CantidadDisponible).HasColumnName("Cantidad_disponible");
            entity.Property(e => e.CantidadTotal).HasColumnName("Cantidad_total");
            entity.Property(e => e.Categoria).HasColumnType("text");
            entity.Property(e => e.Color).HasColumnType("text");
            entity.Property(e => e.Descripcion).HasColumnType("text");
            entity.Property(e => e.Dimensiones).HasColumnType("text");
            entity.Property(e => e.Familia).HasColumnType("text");
            entity.Property(e => e.Lote).HasColumnName("lote");
            entity.Property(e => e.Nombre).HasColumnType("text");
            entity.Property(e => e.PesoReferencia).HasColumnName("Peso referencia");
            entity.Property(e => e.PrecioAlquiler).HasColumnName("Precio alquiler");
            entity.Property(e => e.PrecioRetail).HasColumnName("Precio retail");
            entity.Property(e => e.Sku).HasColumnType("text");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
