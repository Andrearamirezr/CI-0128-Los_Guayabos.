USE [Ficus]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


--TABLA PARA PRODUCTO

CREATE TABLE [dbo].[Producto](
	[SKU] [int] NOT NULL,
	[Nombre] [text] NULL,
	[Familia] [text] NULL,
	[Descripción] [text] NULL,
	[Dimensiones] [text] NOT NULL,
	[Peso] [float] NOT NULL,
	[Peso_referencia] [float] NOT NULL,
	[Precio_alquiler_comercios] [float] NOT NULL,
	[Precio_alquiler_retail] [float] NOT NULL,
	[lote] [int] NOT NULL,
 CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED 
(
	[SKU] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


--TABLA PARA CATEGORIA

CREATE TABLE [dbo].[Categoria](
	[ID_Categoria] [int] NOT NULL,
	[Categoria_producto] [int] NOT NULL,
	[Id_producto] [int] NOT NULL,
 CONSTRAINT [PK_Categoria] PRIMARY KEY CLUSTERED 
(
	[ID_Categoria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Categoria]  WITH CHECK ADD  CONSTRAINT [FK_Categoria_Producto] FOREIGN KEY([Id_producto])
REFERENCES [dbo].[Producto] ([SKU])
GO

ALTER TABLE [dbo].[Categoria] CHECK CONSTRAINT [FK_Categoria_Producto]
GO


--TABLA PARA COLOR

CREATE TABLE [dbo].[Color](
	[ID_color] [int] NOT NULL,
	[Color] [text] NOT NULL,
	[Id_producto] [int] NOT NULL,
 CONSTRAINT [PK_Color] PRIMARY KEY CLUSTERED 
(
	[ID_color] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Color]  WITH CHECK ADD  CONSTRAINT [FK_Color_Producto] FOREIGN KEY([Id_producto])
REFERENCES [dbo].[Producto] ([SKU])
GO

ALTER TABLE [dbo].[Color] CHECK CONSTRAINT [FK_Color_Producto]
GO


--TABLA PARA STOCK

CREATE TABLE [dbo].[Stock](
	[Cantidad_total] [int] NOT NULL,
	[Cantidad_disponible] [int] NOT NULL,
	[Reservado_por_unidad] [int] NOT NULL,
	[Devuelto_por_unidad] [int] NOT NULL,
	[Usado_por_unidad] [int] NOT NULL,
	[Sin_usar_por_unidad] [int] NOT NULL,
	[Id_producto] [int] NOT NULL,
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Stock]  WITH CHECK ADD  CONSTRAINT [FK_Stock_Producto] FOREIGN KEY([Id_producto])
REFERENCES [dbo].[Producto] ([SKU])
GO

ALTER TABLE [dbo].[Stock] CHECK CONSTRAINT [FK_Stock_Producto]
GO

--TABLA RELACION USUARIO-PRODUCTO

CREATE TABLE [dbo].[usuario_producto](
	[Id_producto] [int] NOT NULL,
	[Id_usuario] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[usuario_producto]  WITH CHECK ADD  CONSTRAINT [FK_usuario_producto_Usuario] FOREIGN KEY([Id_usuario])
REFERENCES [dbo].[Usuario] ([ID_usuario])
GO

ALTER TABLE [dbo].[usuario_producto] CHECK CONSTRAINT [FK_usuario_producto_Usuario]
GO

ALTER TABLE [dbo].[usuario_producto]  WITH CHECK ADD  CONSTRAINT [FK_usuario_producto_Producto] FOREIGN KEY([Id_producto])
REFERENCES [dbo].[Producto] ([SKU])
GO

ALTER TABLE [dbo].[usuario_producto] CHECK CONSTRAINT [FK_usuario_producto_Producto]
GO


-------------------------CLIENTE-----------------------------------------
--TABLA CLIENTE
CREATE TABLE [dbo].[Cliente](
	[ID cliente] [int] NOT NULL,
	[Empresa] [varchar](50) NOT NULL,
	[Responsable] [varchar](50) NOT NULL,
	[Nombre Contacto] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[Correo] [varchar](50) NULL,
	[Pagina Web] [varchar](50) NULL,
	[Fecha creacion] [date] NOT NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[ID cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA MEDIO DE COMUNICACION
CREATE TABLE [dbo].[Medio de comunicación](
	[ID Medio] [int] NOT NULL,
	[Medio] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Medio de comunicación] PRIMARY KEY CLUSTERED 
(
	[ID Medio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA SEGMENTO
CREATE TABLE [dbo].[Segmento](
	[ID Segmento] [int] NOT NULL,
	[Tipo de comercio] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Segmento] PRIMARY KEY CLUSTERED 
(
	[ID Segmento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA RELACION CLIENTE-MEDIO DE COMUNICACION
CREATE TABLE [dbo].[Cliente - Medio de comunicación](
	[ID Cliente] [int] NOT NULL,
	[ID Medio] [int] NOT NULL
	CONSTRAINT [FK ID Cliente] FOREIGN KEY ([ID Cliente]) REFERENCES Cliente ([ID cliente]),
	CONSTRAINT [FK ID Medio] FOREIGN KEY ([ID Medio]) REFERENCES [Medio de comunicación] ([ID Medio]),
) ON [PRIMARY]
GO

--TABLA CLIENTE-SEGMENTO
CREATE TABLE [dbo].[Cliente - Segmento](
	[ID Cliente] [int] NOT NULL,
	[ID Segmento] [int] NOT NULL
	CONSTRAINT [FK ID ClienteSeg] FOREIGN KEY ([ID Cliente]) REFERENCES Cliente ([ID cliente]),
	CONSTRAINT [FK ID Segmento] FOREIGN KEY ([ID Segmento]) REFERENCES [Segmento] ([ID Segmento])
) ON [PRIMARY]
GO

--TABLA PRIORIDAD CLIENTE
CREATE TABLE [dbo].[Prioridad Cliente](
	[ID Cliente] [int] NOT NULL,
	[Baja] [int] NULL,
	[Media] [int] NULL,
	[Alta] [int] NULL
	CONSTRAINT [FK ID ClientePrio] FOREIGN KEY ([ID Cliente]) REFERENCES Cliente ([ID cliente]),
) ON [PRIMARY]
GO

-------------------------------USUARIO--------------------------
-- TABLA USUARIO
CREATE TABLE usuario (
  id_usuario INTEGER PRIMARY KEY,
  contrasena TEXT NOT NULL,
  correo VARCHAR(50) NULL
);

-- TABLA NOMBRE USUARIO
CREATE TABLE nombre_usuario (
  id_usuario INTEGER,
  nombre TEXT NOT NULL,
  apellido1 TEXT NOT NULL,
  apellido2 TEXT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- TABLA ROL DE USUARIO
CREATE TABLE usuario_rol(
  id_usuario INTEGER,
  id_rol INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);


-- TABLA ROL
CREATE TABLE rol (
  id_rol INTEGER PRIMARY KEY,
  puesto VARCHAR(30) NULL
);

-- TABLA PERMISOS
CREATE TABLE permisos (
  id_rol INTEGER,
  agregar_producto BIT,
  eliminar_producto BIT,
  editar_usuario BIT,
  agregar_orden BIT,
  editar_orden BIT,
  eliminar_orden BIT,
  agregar_cliente BIT,
  editar_cliente BIT,
  FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);


CREATE TABLE usuario_cliente(
  id_usuario INTEGER,
  id_cliente INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_usuario) REFERENCES Cliente([ID cliente])
);