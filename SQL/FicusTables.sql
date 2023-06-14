USE [Ficus]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


--TABLA PARA PRODUCTO

CREATE TABLE [dbo].[Producto](
	[SKU] [int] NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Familia] [varchar](50) NULL,
	[Descripcion] [varchar](max) NULL,
	[Dimensiones] [varchar](50) NOT NULL,
	[Peso] [float] NOT NULL,
	[Peso_referencia] [float] NOT NULL,
	[Precio_alquiler_comercios] [float] NOT NULL,
	[Precio_alquiler_retail] [float] NOT NULL,
	[lote] [int] NOT NULL,
 CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED 
(
	[SKU] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
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
	--ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Categoria] CHECK CONSTRAINT [FK_Categoria_Producto]
GO


--TABLA PARA COLOR

CREATE TABLE [dbo].[Color](
	[ID_color] [int] NOT NULL,
	[Color] [varchar](50) NOT NULL,
	[Id_producto] [int] NOT NULL,
 CONSTRAINT [PK_Color] PRIMARY KEY CLUSTERED 
(
	[ID_color] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Color]  WITH CHECK ADD  CONSTRAINT [FK_Color_Producto] FOREIGN KEY([Id_producto])
REFERENCES [dbo].[Producto] ([SKU])
	--ON DELETE CASCADE
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
	--ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Stock] CHECK CONSTRAINT [FK_Stock_Producto]
GO

-------------------------Orden-----------------------------------------
--TABLA ORDEN

CREATE TABLE [dbo].[Orden](
	[Consecutivo] [int] NOT NULL,
	[Monto_total] [float] NULL,
	[Feria_verde] [bit] NULL,
	[Detalle_orden] [varchar](max) NULL,
	[Fecha_alquiler] [datetime] NOT NULL,
	[Fecha_terminacion] [datetime] NOT NULL,
 CONSTRAINT [PK_Orden] PRIMARY KEY CLUSTERED 
(
	[Consecutivo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA PARA Estado
CREATE TABLE [dbo].[Estado](
	[ID_estado] [int] NOT NULL,
	[Estado] [varchar](50) NOT NULL,
	[Id_orden] [int] NOT NULL,
 CONSTRAINT [PK_Estado] PRIMARY KEY CLUSTERED 
(
	[ID_estado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
	--ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Estado]  WITH CHECK ADD  CONSTRAINT [FK_Estado_Orden] FOREIGN KEY([Id_orden])
REFERENCES [dbo].[Orden] ([Consecutivo])
	--ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Estado] CHECK CONSTRAINT [FK_Estado_Orden]
GO


--TABLA RELACION ORDEN-PRODUCTO
CREATE TABLE [dbo].[orden_producto](
	[Id_producto] [int] NOT NULL,
	[Id_orden] [int] NOT NULL,
	[Precio_descuento] [int] NOT NULL,
	[Reservado][int] NOT NULL,
	[Sin_usar][int] NOT NULL,
	[Usado][int] NOT NULL,
	[Devuelto][int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[orden_producto]  WITH CHECK ADD  CONSTRAINT [FK_orden_producto_Orden] FOREIGN KEY([Id_orden])
REFERENCES [dbo].[Orden] ([Consecutivo])
GO

ALTER TABLE [dbo].[orden_producto] CHECK CONSTRAINT [FK_orden_producto_Orden]
GO

ALTER TABLE [dbo].[orden_producto]  WITH CHECK ADD  CONSTRAINT [FK_orden_producto_Producto] FOREIGN KEY([Id_producto])
REFERENCES [dbo].[Producto] ([SKU])
	--ON DELETE CASCADE ON UPDATE CASCADE
GO

ALTER TABLE [dbo].[orden_producto] CHECK CONSTRAINT [FK_orden_producto_Producto]
GO


-------------------------CLIENTE-----------------------------------------
--TABLA CLIENTE
CREATE TABLE [dbo].[Cliente](
	[ID_cliente] [int] NOT NULL,
	[Empresa] [varchar](50) NOT NULL,
	[Responsable] [varchar](50) NOT NULL,
	[Nombre_contacto] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[Correo] [varchar](50) NULL,
	[Pagina_Web] [varchar](50) NULL,
	[Fecha_creacion] [datetime] NOT NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[ID_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA MEDIO DE COMUNICACION
CREATE TABLE [dbo].[Medio_de_comunicacion](
	[ID_medio] [int] NOT NULL,
	[Medio] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Medio_de_comunicacion] PRIMARY KEY CLUSTERED 
(
	[ID_medio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA SEGMENTO
CREATE TABLE [dbo].[Segmento](
	[ID_segmento] [int] NOT NULL,
	[Tipo_de_comercio] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Segmento] PRIMARY KEY CLUSTERED 
(
	[ID_segmento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA RELACION CLIENTE-MEDIO DE COMUNICACION
CREATE TABLE [dbo].[Cliente_Medio_de_comunicacion](
	[ID_cliente] [int] NOT NULL,
	[ID_medio] [int] NOT NULL
	CONSTRAINT [FK ID_cliente] FOREIGN KEY ([ID_cliente]) REFERENCES Cliente ([ID_cliente]),
	CONSTRAINT [FK ID_medio] FOREIGN KEY ([ID_medio]) REFERENCES [Medio_de_comunicacion] ([ID_medio]),
		--ON DELETE CASCADE ON UPDATE CASCADE
) ON [PRIMARY]
GO

--TABLA CLIENTE-SEGMENTO
CREATE TABLE [dbo].[Cliente_Segmento](
	[ID_cliente] [int] NOT NULL,
	[ID_segmento] [int] NOT NULL
	CONSTRAINT [FK ID_clienteSeg] FOREIGN KEY ([ID_cliente]) REFERENCES Cliente ([ID_cliente]),
	CONSTRAINT [FK ID_segmento] FOREIGN KEY ([ID_segmento]) REFERENCES [Segmento] ([ID_segmento])
		--ON DELETE CASCADE ON UPDATE CASCADE
) ON [PRIMARY]
GO

--TABLA Prioridad Cliente
CREATE TABLE [dbo].[Prioridad_Cliente](
	[ID_cliente] [int] NOT NULL,
	[Baja] [int] NULL,
	[Media] [int] NULL,
	[Alta] [int] NULL
	CONSTRAINT [FK ID_clientePrio] FOREIGN KEY ([ID_cliente]) REFERENCES Cliente ([ID_cliente]),
		--ON DELETE CASCADE
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
	--ON DELETE CASCADE
);

-- TABLA ROL
CREATE TABLE rol (
  id_rol INTEGER PRIMARY KEY,
  puesto VARCHAR(30) NULL
);

-- TABLA ROL DE USUARIO
CREATE TABLE usuario_rol(
  id_usuario INTEGER,
  id_rol INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
	--ON DELETE CASCADE ON UPDATE CASCADE
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
	--ON DELETE CASCADE
);


CREATE TABLE usuario_cliente(
  id_usuario INTEGER,
  id_cliente INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_usuario) REFERENCES Cliente([ID_cliente])
	--ON DELETE CASCADE ON UPDATE CASCADE
);

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

--TABLA RELACION USUARIO-ORDEN
CREATE TABLE [dbo].[usuario_orden](
	[Id_orden] [int] NOT NULL,
	[Id_usuario] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[usuario_orden]  WITH CHECK ADD  CONSTRAINT [FK_usuario_orden_Usuario] FOREIGN KEY([Id_usuario])
REFERENCES [dbo].[Usuario] ([ID_usuario])
GO

ALTER TABLE [dbo].[usuario_orden] CHECK CONSTRAINT [FK_usuario_orden_Usuario]
GO

ALTER TABLE [dbo].[usuario_orden]  WITH CHECK ADD  CONSTRAINT [FK_usuario_orden_Orden] FOREIGN KEY([Id_orden])
REFERENCES [dbo].[Orden] ([Consecutivo])
GO

ALTER TABLE [dbo].[usuario_orden] CHECK CONSTRAINT [FK_usuario_orden_Orden]
GO