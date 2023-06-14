USE [Ficus]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--Agregar un usuario
/**CREATE PROCEDURE AgregarUsuario (@usuario AS CHAR(50), @hashedcontrasena AS CHAR(84)) AS
BEGIN
INSERT INTO Usuario VALUES (@usuario, @hashedcontrasena);
END
GO**/

--Agregar un cliente
CREATE OR ALTER PROCEDURE AgregarCliente (
    @ID_cliente INTEGER,
	@Empresa VARCHAR(50),
	@Responsable VARCHAR(50),
	@Nombre_Contacto VARCHAR(50),
	@Telefono VARCHAR(50),
	@Correo VARCHAR(50),
	@Pagina_Web VARCHAR(50),
	@Fecha_creacion DATETIME,
	@Id_medio_comu INTEGER,
	@Medio VARCHAR(50),
	@Id_segmento INTEGER,
	@Tipo_comercio VARCHAR(50),
	@Alta INTEGER,
	@Media INTEGER,
	@Baja INTEGER
) 
AS
BEGIN
    BEGIN TRY
        IF dbo.ExisteCliente(@ID_cliente, @Empresa, @Responsable, @Nombre_Contacto, @Telefono, @Correo, @Pagina_Web, @Fecha_creacion) = 0
        BEGIN
            INSERT INTO Cliente(ID_cliente, Empresa,  Responsable, Nombre_Contacto, Telefono, Correo, Pagina_Web, Fecha_creacion)
            VALUES (@ID_cliente, @Empresa, @Responsable, @Nombre_Contacto, @Telefono, @Correo, @Pagina_Web, @Fecha_creacion)
        END
		--Se agregan valores a la tabla de medios de comunicación del cliente
		INSERT INTO Medio_de_comunicacion(ID_medio, Medio)
		VALUES(@Id_medio_comu, @Medio)
		--Se agregan valores a la tabla de segmento del cliente
		INSERT INTO Segmento(ID_segmento, Tipo_de_comercio)
		VALUES(@Id_segmento, @Tipo_comercio)
		--Se agregan valores a la tabla de prioridad del cliente
		INSERT INTO Prioridad_Cliente(ID_cliente, Alta, Media, Baja)
		VALUES(@ID_cliente, @Alta, @Media, @Baja)

		--Se agregan valores a la tablas que se relacionan con la tabla cliente
		INSERT INTO Cliente_Medio_de_comunicacion(ID_cliente, ID_medio)
		VALUES(@ID_cliente, @Id_medio_comu)
		INSERT INTO Cliente_Segmento(ID_cliente, ID_segmento)
		VALUES(@ID_cliente, @Id_segmento)
    END TRY
    BEGIN CATCH
        THROW
    END CATCH
END
GO

--Agregar un producto
CREATE PROCEDURE AgregarProducto (
	@SKU INTEGER,
	@Nombre VARCHAR(50),
	@Familia VARCHAR(50),
	@Descripcion VARCHAR(max),
	@Dimensiones VARCHAR(50),
	@Peso FLOAT,
	@Peso_referencia FLOAT,
	@Precio_alquiler_comercios FLOAT,
	@Precio_alquiler_retail FLOAT,
	@Lote INTEGER,
	@ID_Categoria INTEGER,
	@Categoria_producto INTEGER,
	@ID_color INTEGER,
	@Color VARCHAR(50),
	@Cantidad_total INTEGER,
	@Cantidad_disponible INTEGER,
	@Reservado_por_unidad INTEGER,
	@Devuelto_por_unidad INTEGER,
	@Usado_por_unidad INTEGER,
	@Sin_usar_por_unidad INTEGER) 
AS
BEGIN
    BEGIN TRY
        IF dbo.ExisteProducto(@SKU,@Nombre,@Familia,@Descripcion,@Dimensiones,@Peso,@Peso_referencia,@Precio_alquiler_comercios,@Precio_alquiler_retail, @Lote) = 0
        BEGIN
            INSERT INTO Producto(SKU, Nombre, Familia,  Descripcion, Peso, Peso_referencia, Precio_alquiler_comercios,Precio_alquiler_retail, lote)
            VALUES (@SKU, @Nombre, @Familia, @Descripcion, @Peso, @Peso_referencia, @Precio_alquiler_comercios, @Precio_alquiler_retail, @Lote)
        END
		--Se agregan valores a la tabla de medios de comunicación del cliente
		INSERT INTO Categoria(ID_Categoria, Categoria_producto,Id_producto)
		VALUES(@ID_Categoria, @Categoria_producto, @SKU)
		--Se agregan valores a la tabla de segmento del cliente
		INSERT INTO Color(ID_color, Color, Id_producto)
		VALUES(@ID_color, @Color, @SKU)
		--Se agregan valores a la tabla de prioridad del cliente
		INSERT INTO Stock(Cantidad_total, Cantidad_disponible, Reservado_por_unidad, Devuelto_por_unidad, Usado_por_unidad, Sin_usar_por_unidad, Id_producto)
		VALUES(@Cantidad_total, @Cantidad_disponible, @Reservado_por_unidad, @Devuelto_por_unidad, @Usado_por_unidad, @Sin_usar_por_unidad, @SKU)
    END TRY
    BEGIN CATCH
        THROW
    END CATCH
END
GO

--Agregar una orden
CREATE PROCEDURE AgregarOrden (
	@Consecutivo INTEGER,
	@Monto_total FLOAT,
	@Feria_verde BIT,
	@Detalle_orden VARCHAR(max),
	@Fecha_alquiler DATETIME,
	@Fecha_terminacion DATETIME,
	@ID_estado INTEGER,
	@Estado VARCHAR(50),
	@Precio_descuento INTEGER,
	@Reservado INTEGER,
	@Sin_usar INTEGER,
	@Usado INTEGER,
	@Devuelto INTEGER
	) 
AS
BEGIN
    BEGIN TRY
        IF dbo.ExisteOrden(@Consecutivo, @Monto_total, @Feria_verde, @Detalle_orden, @Fecha_alquiler, @Fecha_terminacion) = 0
        BEGIN
            INSERT INTO Orden(Consecutivo, Monto_total, Feria_verde, Detalle_orden, Fecha_alquiler, Fecha_terminacion)
            VALUES (@Consecutivo, @Monto_total, @Feria_verde, @Detalle_orden, @Fecha_alquiler, @Fecha_terminacion)
        END
		--Se agregan valores a la tabla de medios de comunicación del cliente
		INSERT INTO Estado(ID_estado, Estado, Id_orden)
		VALUES(@ID_estado, @Estado, @Consecutivo)
    END TRY
    BEGIN CATCH
        THROW
    END CATCH
END
GO