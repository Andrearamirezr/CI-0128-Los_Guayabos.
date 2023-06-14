USE [Ficus]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION ExisteCliente (
    @ID_cliente INTEGER,
	@Empresa VARCHAR(50),
	@Responsable VARCHAR(50),
	@Nombre_Contacto VARCHAR(50),
	@Telefono VARCHAR,
	@Correo VARCHAR(50),
	@Pagina_Web VARCHAR(50),
	@Fecha_creacion DATETIME)
RETURNS BIT AS
BEGIN
    DECLARE @existe BIT
    SET @existe = 'FALSE'
    IF EXISTS (SELECT 1 FROM Cliente WHERE ID_cliente = @ID_cliente AND Empresa = @Empresa AND Responsable = @Responsable
        AND Nombre_Contacto = @Nombre_Contacto AND Telefono = @Telefono AND Correo = @Correo AND Pagina_Web = @Pagina_Web 
		AND Fecha_creacion = @Fecha_creacion)
        SET @existe = 'TRUE'
    RETURN @existe
END
GO

CREATE FUNCTION ExisteProducto (
    @SKU INTEGER,
	@Nombre VARCHAR(50),
	@Familia VARCHAR(50),
	@Descripcion VARCHAR(max),
	@Dimensiones VARCHAR(50),
	@Peso FLOAT,
	@Peso_referencia FLOAT,
	@Precio_alquiler_comercios FLOAT,
	@Precio_alquiler_retail FLOAT,
	@Lote INTEGER)
RETURNS BIT AS
BEGIN
    DECLARE @existe BIT
    SET @existe = 'FALSE'
    IF EXISTS (SELECT 1 FROM Producto WHERE SKU = @SKU AND Nombre = @Nombre AND Familia = @Familia
	AND Descripcion = @Descripcion AND Peso = @Peso AND Peso_referencia = @Peso_referencia 
	AND Precio_alquiler_comercios = @Precio_alquiler_comercios AND Precio_alquiler_retail = @Precio_alquiler_retail
	AND Lote = @Lote)
        SET @existe = 'TRUE'
    RETURN @existe
END
GO

CREATE FUNCTION ExisteOrden (
    @Consecutivo INTEGER,
	@Monto_total FLOAT,
	@Feria_verde BIT,
	@Detalle_orden VARCHAR(max),
	@Fecha_alquiler DATETIME,
	@Fecha_terminacion DATETIME)
RETURNS BIT AS
BEGIN
    DECLARE @existe BIT
    SET @existe = 'FALSE'
    IF EXISTS (SELECT 1 FROM Orden  WHERE Consecutivo = @Consecutivo AND Monto_total = @Monto_total
	AND Feria_verde = @Feria_verde AND Detalle_orden = @Detalle_orden AND Fecha_alquiler = @Fecha_alquiler
	AND Fecha_terminacion = @Fecha_terminacion)
        SET @existe = 'TRUE'
    RETURN @existe
END
GO