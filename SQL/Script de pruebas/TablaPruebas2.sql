USE [FicusDB]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--TABLA PARA PRODUCTO

CREATE TABLE [dbo].[Producto](
	[Id] [int] NOT NULL,
	[Sku] [text] NOT NULL,
	[Nombre] [text] NULL,
	[Familia] [text] NULL,
	[Categoria] [text] NOT NULL,
	[Color] [text] NOT NULL,
	[Descripcion] [text] NULL,
	[Dimensiones] [text] NOT NULL,
	[Peso] [float] NOT NULL,
	[Peso referencia] [float] NOT NULL,
	[Precio alquiler] [float] NOT NULL,
	[Precio retail] [float] NOT NULL,
	[Cantidad_total] [int] NOT NULL,
	[Cantidad_disponible] [int] NULL,
	[lote] [int] NOT NULL,
 CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

-------------------------CLIENTE-----------------------------------------
--TABLA CLIENTE
CREATE TABLE [dbo].[Cliente](
	[Id] [int] NOT NULL,
	[Empresa] [varchar](50) NOT NULL,
	[Fecha creacion] [date] NOT NULL,
	[Segmento] [varchar] (50) NOT NULL,
	[Responsable] [varchar](50) NOT NULL,
	[Prioridad] [varchar] (50) NOT NULL,
	[Estado] [varchar] (50) NOT NULL,
	[Medio] [varchar] (50) NOT NULL,
	[Contacto] [varchar](50) NOT NULL,
	[Telefono] [int] NOT NULL,
	[Correo] [varchar](50) NULL,
	[Pagina Web] [varchar](50) NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

-------------------------ORDENES-----------------------------------------
--TABLA ORDEN
CREATE TABLE [dbo].[Orden](
	[Id] [int] NOT NULL,
	[Consecutivo] [varchar](50) NOT NULL,
	[Fecha alquiler] [varchar](50) NOT NULL,
	[Cliente] [varchar](50) NOT NULL,
	[Feria verde] [varchar](50) NOT NULL,
	[Estado] [varchar](50) NOT NULL,
	[Productos] [text] NOT NULL,
	[Ordenados] [varchar](50) NOT NULL,
	[Sin usar] [varchar](50) NOT NULL,
	[Usados] [varchar](50) NOT NULL,
	[Devueltos] [varchar](50) NOT NULL,
	[Fecha finalizacion] [varchar](50) NOT NULL,
	[Monto] [varchar](50) NOT NULL,

 CONSTRAINT [PK_Orden] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

--TABLA PARA STOCK

CREATE TABLE [dbo].[Detalle](
	[Id] [int] NOT NULL,
	[Consecutivo] [varchar](50) NOT NULL,
	[Sku] [varchar](50) NOT NULL,
	[Ordenados] [int] NOT NULL,
	[Devueltos] [int] NOT NULL,
	[Usados] [int] NOT NULL,
	[Sin usar] [int] NOT NULL,
	CONSTRAINT [PK_Detalle] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO