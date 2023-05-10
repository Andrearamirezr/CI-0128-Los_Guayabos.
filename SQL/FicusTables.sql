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