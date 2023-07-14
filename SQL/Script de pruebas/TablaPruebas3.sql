USE [Ficus_pruebas]
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

INSERT INTO [dbo].[Orden] VALUES(51,'Orden-5','24/1/2021','Feria verde','Si', 'Completada','a', '460', '50','410','460','26/1/2021','29.470')
INSERT INTO [dbo].[Orden] VALUES(41,'Orden-4','16/1/2021','Feria verde','Si', 'Completada','a', '350', '100','250','350','19/1/2021','20.000')
INSERT INTO [dbo].[Orden] VALUES(31,'Orden-3','10/1/2021','Feria verde','Si', 'Completada','a', '400', '50','350', '400','13/1/2021','27.550')
INSERT INTO [dbo].[Orden] VALUES(21,'Orden-2','3/1/2021','Feria verde','Si', 'Completada','a', '350', '67','283','350','5/1/2021','22.350')
INSERT INTO [dbo].[Orden] VALUES(20,'Orden-1','17/12/2020','Feria verde','Si', 'Completada','a', '350', '50','300','350','19/12/2020','25.000')


SELECT * FROM [dbo].[Producto]
SELECT * FROM [dbo].[Orden]
SELECT * FROM [dbo].[Cliente]