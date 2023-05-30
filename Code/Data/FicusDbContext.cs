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

    public virtual DbSet<Categoria> Categoria { get; set; }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<ClienteMedioDeComunicación> ClienteMedioDeComunicacións { get; set; }

    public virtual DbSet<ClienteSegmento> ClienteSegmentos { get; set; }

    public virtual DbSet<Color> Colors { get; set; }

    public virtual DbSet<MedioDeComunicación> MedioDeComunicacións { get; set; }

    public virtual DbSet<NombreUsuario> NombreUsuarios { get; set; }

    public virtual DbSet<Permiso> Permisos { get; set; }

    public virtual DbSet<PrioridadCliente> PrioridadClientes { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Rol> Rols { get; set; }

    public virtual DbSet<Segmento> Segmentos { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    public virtual DbSet<UsuarioCliente> UsuarioClientes { get; set; }

    public virtual DbSet<UsuarioProducto> UsuarioProductos { get; set; }

    public virtual DbSet<UsuarioRol> UsuarioRols { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Categoria>(entity =>
        {
            entity.HasKey(e => e.IdCategoria);

            entity.Property(e => e.IdCategoria)
                .ValueGeneratedNever()
                .HasColumnName("ID_Categoria");
            entity.Property(e => e.CategoriaProducto).HasColumnName("Categoria_producto");
            entity.Property(e => e.IdProducto).HasColumnName("Id_producto");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Categoria)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Categoria_Producto");
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.IdCliente);

            entity.ToTable("Cliente");

            entity.Property(e => e.IdCliente)
                .ValueGeneratedNever()
                .HasColumnName("ID cliente");
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Empresa)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FechaCreacion)
                .HasColumnType("date")
                .HasColumnName("Fecha creacion");
            entity.Property(e => e.NombreContacto)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Nombre Contacto");
            entity.Property(e => e.PaginaWeb)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Pagina Web");
            entity.Property(e => e.Responsable)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ClienteMedioDeComunicación>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Cliente - Medio de comunicación");

            entity.Property(e => e.IdCliente).HasColumnName("ID Cliente");
            entity.Property(e => e.IdMedio).HasColumnName("ID Medio");

            entity.HasOne(d => d.IdClienteNavigation).WithMany()
                .HasForeignKey(d => d.IdCliente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK ID Cliente");

            entity.HasOne(d => d.IdMedioNavigation).WithMany()
                .HasForeignKey(d => d.IdMedio)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK ID Medio");
        });

        modelBuilder.Entity<ClienteSegmento>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Cliente - Segmento");

            entity.Property(e => e.IdCliente).HasColumnName("ID Cliente");
            entity.Property(e => e.IdSegmento).HasColumnName("ID Segmento");

            entity.HasOne(d => d.IdClienteNavigation).WithMany()
                .HasForeignKey(d => d.IdCliente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK ID ClienteSeg");

            entity.HasOne(d => d.IdSegmentoNavigation).WithMany()
                .HasForeignKey(d => d.IdSegmento)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK ID Segmento");
        });

        modelBuilder.Entity<Color>(entity =>
        {
            entity.HasKey(e => e.IdColor);

            entity.ToTable("Color");

            entity.Property(e => e.IdColor)
                .ValueGeneratedNever()
                .HasColumnName("ID_color");
            entity.Property(e => e.Color1)
                .HasColumnType("text")
                .HasColumnName("Color");
            entity.Property(e => e.IdProducto).HasColumnName("Id_producto");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Colors)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Color_Producto");
        });

        modelBuilder.Entity<MedioDeComunicación>(entity =>
        {
            entity.HasKey(e => e.IdMedio);

            entity.ToTable("Medio de comunicación");

            entity.Property(e => e.IdMedio)
                .ValueGeneratedNever()
                .HasColumnName("ID Medio");
            entity.Property(e => e.Medio)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<NombreUsuario>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("nombre_usuario");

            entity.Property(e => e.Apellido1)
                .HasColumnType("text")
                .HasColumnName("apellido1");
            entity.Property(e => e.Apellido2)
                .HasColumnType("text")
                .HasColumnName("apellido2");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.Nombre)
                .HasColumnType("text")
                .HasColumnName("nombre");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany()
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__nombre_us__id_us__4F7CD00D");
        });

        modelBuilder.Entity<Permiso>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("permisos");

            entity.Property(e => e.AgregarCliente).HasColumnName("agregar_cliente");
            entity.Property(e => e.AgregarOrden).HasColumnName("agregar_orden");
            entity.Property(e => e.AgregarProducto).HasColumnName("agregar_producto");
            entity.Property(e => e.EditarCliente).HasColumnName("editar_cliente");
            entity.Property(e => e.EditarOrden).HasColumnName("editar_orden");
            entity.Property(e => e.EditarUsuario).HasColumnName("editar_usuario");
            entity.Property(e => e.EliminarOrden).HasColumnName("eliminar_orden");
            entity.Property(e => e.EliminarProducto).HasColumnName("eliminar_producto");
            entity.Property(e => e.IdRol).HasColumnName("id_rol");

            entity.HasOne(d => d.IdRolNavigation).WithMany()
                .HasForeignKey(d => d.IdRol)
                .HasConstraintName("FK__permisos__id_rol__6383C8BA");
        });

        modelBuilder.Entity<PrioridadCliente>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Prioridad Cliente");

            entity.Property(e => e.IdCliente).HasColumnName("ID Cliente");

            entity.HasOne(d => d.IdClienteNavigation).WithMany()
                .HasForeignKey(d => d.IdCliente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK ID ClientePrio");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.Sku);

            entity.ToTable("Producto");

            entity.Property(e => e.Sku)
                .ValueGeneratedNever()
                .HasColumnName("SKU");
            entity.Property(e => e.Descripción).HasColumnType("text");
            entity.Property(e => e.Dimensiones).HasColumnType("text");
            entity.Property(e => e.Familia).HasColumnType("text");
            entity.Property(e => e.Lote).HasColumnName("lote");
            entity.Property(e => e.Nombre).HasColumnType("text");
            entity.Property(e => e.PesoReferencia).HasColumnName("Peso_referencia");
            entity.Property(e => e.PrecioAlquilerComercios).HasColumnName("Precio_alquiler_comercios");
            entity.Property(e => e.PrecioAlquilerRetail).HasColumnName("Precio_alquiler_retail");
        });

        modelBuilder.Entity<Rol>(entity =>
        {
            entity.HasKey(e => e.IdRol).HasName("PK__rol__6ABCB5E0C73C697A");

            entity.ToTable("rol");

            entity.Property(e => e.IdRol)
                .ValueGeneratedNever()
                .HasColumnName("id_rol");
            entity.Property(e => e.Puesto)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("puesto");
        });

        modelBuilder.Entity<Segmento>(entity =>
        {
            entity.HasKey(e => e.IdSegmento);

            entity.ToTable("Segmento");

            entity.Property(e => e.IdSegmento)
                .ValueGeneratedNever()
                .HasColumnName("ID Segmento");
            entity.Property(e => e.TipoDeComercio)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Tipo de comercio");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Stock");

            entity.Property(e => e.CantidadDisponible).HasColumnName("Cantidad_disponible");
            entity.Property(e => e.CantidadTotal).HasColumnName("Cantidad_total");
            entity.Property(e => e.DevueltoPorUnidad).HasColumnName("Devuelto_por_unidad");
            entity.Property(e => e.IdProducto).HasColumnName("Id_producto");
            entity.Property(e => e.ReservadoPorUnidad).HasColumnName("Reservado_por_unidad");
            entity.Property(e => e.SinUsarPorUnidad).HasColumnName("Sin_usar_por_unidad");
            entity.Property(e => e.UsadoPorUnidad).HasColumnName("Usado_por_unidad");

            entity.HasOne(d => d.IdProductoNavigation).WithMany()
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Stock_Producto");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__usuario__4E3E04AD6F2CCA17");

            entity.ToTable("usuario");

            entity.Property(e => e.IdUsuario)
                .ValueGeneratedNever()
                .HasColumnName("id_usuario");
            entity.Property(e => e.Contrasena)
                .HasColumnType("text")
                .HasColumnName("contrasena");
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("correo");
        });

        modelBuilder.Entity<UsuarioCliente>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("usuario_cliente");

            entity.Property(e => e.IdCliente).HasColumnName("id_cliente");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany()
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__usuario_c__id_us__66603565");

            entity.HasOne(d => d.IdUsuario1).WithMany()
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__usuario_c__id_us__656C112C");
        });

        modelBuilder.Entity<UsuarioProducto>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("usuario_producto");

            entity.Property(e => e.IdProducto).HasColumnName("Id_producto");
            entity.Property(e => e.IdUsuario).HasColumnName("Id_usuario");

            entity.HasOne(d => d.IdProductoNavigation).WithMany()
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_usuario_producto_Producto");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany()
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_usuario_producto_Usuario");
        });

        modelBuilder.Entity<UsuarioRol>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("usuario_rol");

            entity.Property(e => e.IdRol).HasColumnName("id_rol");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

            entity.HasOne(d => d.IdRolNavigation).WithMany()
                .HasForeignKey(d => d.IdRol)
                .HasConstraintName("FK__usuario_r__id_ro__619B8048");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany()
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__usuario_r__id_us__60A75C0F");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
