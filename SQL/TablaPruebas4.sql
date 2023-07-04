Use [Ficus_pruebas]
GO

DELETE FROM [dbo].[Detalle]
WHERE Id >= 0;
DELETE FROM [dbo].[Orden]
WHERE Id >= 0;

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

SELECT * FROM [dbo].[Orden]
SELECT * FROM [dbo].[Detalle]