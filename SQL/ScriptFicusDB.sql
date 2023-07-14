USE [master]
GO

DECLARE @device_directory NVARCHAR(520)
SELECT @device_directory = SUBSTRING(filename, 1, CHARINDEX(N'master.mdf', LOWER(filename)) - 1)
FROM master.dbo.sysaltfiles WHERE dbid = 1 AND fileid = 1

EXECUTE (N'CREATE DATABASE FicusDb
  CONTAINMENT = NONE
  ON PRIMARY (NAME = N''FicusDb'', FILENAME = N''' + @device_directory + N'FicusDb.mdf'' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB)
  LOG ON (NAME = N''FicusDb_log'',  FILENAME = N''' + @device_directory + N'FicusDb.ldf'', SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
  WITH CATALOG_COLLATION = DATABASE_DEFAULT')
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FicusDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [FicusDb] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [FicusDb] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [FicusDb] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [FicusDb] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [FicusDb] SET ARITHABORT OFF 
GO

ALTER DATABASE [FicusDb] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [FicusDb] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [FicusDb] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [FicusDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [FicusDb] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [FicusDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [FicusDb] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [FicusDb] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [FicusDb] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [FicusDb] SET  DISABLE_BROKER 
GO

ALTER DATABASE [FicusDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [FicusDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [FicusDb] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [FicusDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [FicusDb] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [FicusDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [FicusDb] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [FicusDb] SET RECOVERY FULL 
GO

ALTER DATABASE [FicusDb] SET  MULTI_USER 
GO

ALTER DATABASE [FicusDb] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [FicusDb] SET DB_CHAINING OFF 
GO

ALTER DATABASE [FicusDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [FicusDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [FicusDb] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [FicusDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [FicusDb] SET QUERY_STORE = OFF
GO

ALTER DATABASE [FicusDb] SET  READ_WRITE 
GO

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

USE [FicusDB]
GO
INSERT INTO [dbo].[Producto] VALUES(3,'EC-3-JA-1','a','Vajilla','Vaso', 'JA','Vaso pequeno 400mL', '180x40', 40.0,38.2,150.0,125.5,1500,750,1)
INSERT INTO [dbo].[Producto] VALUES(4,'EC-3-RO-2','a','Vajilla','Vaso', 'RO','Vaso pequeno 400mL', '180x40', 40.0,38.2,150.0,125.5,1200,830,1)
INSERT INTO [dbo].[Producto] VALUES(5,'EC-3-AZ-1','a','Vajilla','Vaso', 'AZ','Vaso pequeno 400mL', '180x40', 40.0,38.2,150.0,125.5,920,700,1)
INSERT INTO [dbo].[Producto] VALUES(6,'ML-2-RO-3','a','Vajilla','Plato', 'RO','Plato grande rojo', '50x38', 60.0,50.2,200.0,150.2,1320,900,1)
INSERT INTO [dbo].[Producto] VALUES(7,'MX-1-JA-2','a','Vajilla','Plato', 'JA','Plato pequeno amarillo', '23x52', 52.0,45.2,175.0,130.2,1800,1420,1)

INSERT INTO [dbo].[Cliente] VALUES(1,'Feria Verde',CAST('17/12/2020' as date),'Feria Verde','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(2,'Soda 1',CAST('17/12/2020' as date),'Soda','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(3,'Panaderia 1',CAST('17/12/2020' as date),'Panaderia','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(4,'Empresa 1',CAST('17/12/2020' as date),'Empresa','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(5,'Eduardo',CAST('17/12/2020' as date),'Cliente','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(6,'Panaderia 2',CAST('17/12/2020' as date),'Panaderia','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(7,'Panaderia 3',CAST('17/12/2020' as date),'Panaderia','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(8,'Empresa 2',CAST('17/12/2020' as date),'Empresa','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(9,'Colegio 1',CAST('17/12/2020' as date),'Colegio','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(10,'Raquel',CAST('17/12/2020' as date),'Cliente','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(11,'Esteban',CAST('17/12/2020' as date),'Cliente','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(12,'Feria 2',CAST('17/12/2020' as date),'Feria','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(13,'Empresa 3',CAST('17/12/2020' as date),'Empresa','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(14,'Soda 2',CAST('17/12/2020' as date),'Soda','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(15,'Soda 3',CAST('17/12/2020' as date),'Soda','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(16,'Colegio 2',CAST('17/12/2020' as date),'Colegio','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(17,'Soda 4',CAST('17/12/2020' as date),'Soda','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(18,'Colegio 3',CAST('17/12/2020' as date),'Colegio','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')
INSERT INTO [dbo].[Cliente] VALUES(19,'Soda 5',CAST('17/12/2020' as date),'Soda','Andrea', 'Alta','Cliente', 'Web', 'Pedro',70,'correo.mail','web.com')

INSERT INTO [dbo].[Orden] VALUES(51,'Orden-5','24/1/2021','Feria verde','Si', 'Completada','a', '350', '350','300','50','26/1/2021','29.470')
INSERT INTO [dbo].[Orden] VALUES(41,'Orden-4','16/1/2021','Feria verde','Si', 'Completada','a', '350', '350','300','50','19/1/2021','20.000')
INSERT INTO [dbo].[Orden] VALUES(31,'Orden-3','10/1/2021','Feria verde','Si', 'Completada','a', '350', '350','300', '50','13/1/2021','27.550')
INSERT INTO [dbo].[Orden] VALUES(21,'Orden-2','3/1/2021','Feria verde','Si', 'Completada','a', '350', '350','300','50','5/1/2021','22.350')
INSERT INTO [dbo].[Orden] VALUES(20,'Orden-1','17/12/2020','Feria verde','Si', 'Completada','a', '350', '350','300','50','19/12/2020','25.000')

INSERT INTO [dbo].[Detalle] VALUES (1, 'Orden-1', 'MX-1-JA-2', 250, 250, 250, 0)
INSERT INTO [dbo].[Detalle] VALUES (2, 'Orden-1', 'EC-3-AZ-1', 100, 100, 50, 50)
INSERT INTO [dbo].[Detalle] VALUES (3, 'Orden-2', 'MX-1-JA-2', 250, 250, 250, 0)
INSERT INTO [dbo].[Detalle] VALUES (4, 'Orden-2', 'EC-3-AZ-1', 100, 100, 50, 50)
INSERT INTO [dbo].[Detalle] VALUES (5, 'Orden-3', 'MX-1-JA-2', 250, 250, 250, 0)
INSERT INTO [dbo].[Detalle] VALUES (6, 'Orden-3', 'EC-3-AZ-1', 100, 100, 50, 50)
INSERT INTO [dbo].[Detalle] VALUES (7, 'Orden-4', 'MX-1-JA-2', 250, 250, 250, 0)
INSERT INTO [dbo].[Detalle] VALUES (8, 'Orden-4', 'EC-3-AZ-1', 100, 100, 50, 50)
INSERT INTO [dbo].[Detalle] VALUES (9, 'Orden-5', 'MX-1-JA-2', 250, 250, 250, 0)
INSERT INTO [dbo].[Detalle] VALUES (10, 'Orden-5', 'EC-3-AZ-1', 100, 100, 50, 50)
Go

Use [FicusDB]
Go

CREATE PROCEDURE VerificarUnidadesDisponibles
    @Sku VARCHAR(50),
    @FechaInicio DATE,
    @FechaFinal DATE
AS
BEGIN
    SET NOCOUNT ON;

    -- Variable para almacenar la cantidad de unidades disponibles
    DECLARE @UnidadesDisponibles INT;

    -- Verificar la cantidad de unidades disponibles dentro del rango de fechas
    SELECT @UnidadesDisponibles = P.Cantidad_total - SUM(D.Ordenados)
    FROM Producto P
    INNER JOIN Detalle D ON P.Sku = D.Sku
    INNER JOIN Orden O ON D.Consecutivo = O.Consecutivo
    WHERE P.Sku = @Sku
        AND CAST(O.[Fecha alquiler] AS DATE) BETWEEN @FechaInicio AND @FechaFinal
    GROUP BY P.Cantidad_total;

    -- Retornar la cantidad de unidades disponibles
    SELECT @UnidadesDisponibles AS UnidadesDisponibles;
END

Go