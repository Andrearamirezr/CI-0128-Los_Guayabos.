Use [Ficus_pruebas]
Go
CREATE PROCEDURE VerificarUnidadesDisponibles
    @Sku VARCHAR(50),
    @FechaInicio VARCHAR(50),
    @FechaFinal VARCHAR(50)
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
        AND CAST(O.[Fecha alquiler] AS DATE) BETWEEN CAST(@FechaInicio AS DATE) AND CAST(@FechaFinal AS DATE)
    GROUP BY P.Cantidad_total;

    -- Retornar la cantidad de unidades disponibles
    SELECT @UnidadesDisponibles AS UnidadesDisponibles;
END

Go