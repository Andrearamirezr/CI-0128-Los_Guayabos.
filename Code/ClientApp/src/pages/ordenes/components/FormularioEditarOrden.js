import '../VerOrden.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from "react-icons/md";


{/* Componente para editar los datos de una orden */ }
const DetallesOrden = (props) => {
    const navigate = useNavigate();
    const counterDetalle = parseInt(localStorage.getItem('cd')) || 100
    const [idDetalle, setIdDetalle] = useState(counterDetalle)
    const estados = ["Reservado", "Preparado", "En alquiler", "Limpiado", "Facturado", "Completado"]
    const [orden, setOrden] = useState()
    const [productosGet, setProductosGet] = useState(true)
    const [id, setId] = useState(props.id)
    const [isLoading, setIsLoading] = useState(true);
    const [detalle, setDetalle] = useState([])
    const [detalles, setDetalles] = useState([])
    const [editarDetalles, setEditarDetalles] = useState(counterDetalle)
    const [productos, setProductos] = useState([])

    const obtenerProductos = async () => {
        const response = await fetch(window.location.origin + "/api/producto/obtener")
        if (response.ok) {
            const data = await response.json()
            setProductos(data)
            console.log(productos.map())
        } else {
            console.log("error al obtener productos")
        }
    }
    const agregarNuevoDetalle = (item) => {
        setDetalles(prevDetalles => [...prevDetalles, item]);
    };

    const agregarDetalles = (jsonResponse) => {
        detalle.map(item => {
            if (item.consecutivo == jsonResponse.consecutivo) {
                agregarNuevoDetalle(item)
            }
        })
        if (productosGet) { setProductosGet(false) }
    };

    const consultarOrden = async () => {
        const response = await fetch(window.location.origin + "/api/orden/ver/" + parseInt(id))
        const jsonResponse = await response.json();
        setOrden(jsonResponse)
        const response2 = await fetch(window.location.origin + "/api/detalle/obtener/")
        const jsonResponse2 = await response2.json();
        setDetalle(jsonResponse2)
        agregarDetalles(jsonResponse)
        setIsLoading(false)
    }

    useEffect(() => {
        consultarOrden()
        obtenerProductos()
    }, [productosGet])

    const handleInputChange = (index, attribute, value) => {
        setDetalles(prevDetalles => {
            const updatedDetalles = [...prevDetalles];
            updatedDetalles[index][attribute] = value;
            return updatedDetalles;
        });
    };

    const agregarDetalle = (e) => {
        const nuevoDetalle = {
            id: idDetalle,
            consecutivo: orden.consecutivo,
            sku: e.target.value,
            ordenados: 0,
            devueltos: 0,
            usados: 0,
            sinUsar: 0
        }
        setIdDetalle(idDetalle + 1)
        setDetalles(prevDetalles => [...prevDetalles, nuevoDetalle]);
    };

    const actualizarOrden = (e) => {
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        })
    }

    // Metodo para solicitar agregar los datos del formulario a la base de datos
    const confirmar = async (e) => {
        e.preventDefault();
        // Agregar a la base de datos
        try {
            const response = await fetch(window.location.origin +"/api/orden/editar/" + parseInt(id), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orden),
            });
            setIdDetalle(idDetalle + 1);
            console.log(detalles);

            detalles.map(async (item, index) => {
                if(item.id < editarDetalles) {
                    var response = await fetch(window.location.origin + "/api/detalle/editar/" + parseInt(item.id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(item),
                    });
                } else {
                    var response = await fetch(window.location.origin + "/api/detalle/agregar", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(item),
                    });
                }
            });
        } catch (err) {
            console.log('Error: ', err)
        }
        navigate('/ordenes', {
            replace: true,
        });
    };

    useEffect(() => {
        console.log(orden, detalles, idDetalle, editarDetalles)
        localStorage.setItem('cd', (idDetalle).toString())
    }, [editarDetalles, orden, idDetalle, detalles])

    const regresar = e => {
        e.preventDefault();
        navigate('/ordenes', {
            replace: true,
        });
    };
    return (
        <div>{ isLoading ? (
            <div> <p> Cargando...</p ></div >// Mostrar un mensaje de carga mientras isLoading es true    
        ) : (
        <div>
        <div className="row mb-4">
            <div className="col-2 col-md-1 pt-1 text-end">
                <button className="bt-volver" onClick={regresar}>
                    <MdOutlineArrowBackIosNew className="i-volver" />
                </button>
            </div>
            <div className="col text-start pt-1">
                <h1>Editando: { orden.consecutivo }</h1>
            </div>
        </div>
        <form onSubmit={confirmar}>
            <div className="row pt-4">
                <div class="input-group">
                    <span class="input-group-text bg-span">Fecha Alquiler:</span>
                    <input name="fechaAlquiler" onChange={(e) => actualizarOrden(e)} value={orden.fechaAlquiler}
                        type="text" aria-label="Fecha Alquiler" placeholder="Fecha Alquiler" class="form-control input-form" />
                    <span class="input-group-text bg-span">Cliente:</span>
                    <input name="cliente" onChange={(e) => actualizarOrden(e)} value={orden.cliente}
                        type="text" aria-label="Cliente" placeholder="Cliente" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Feria Verde:</span>
                    <input name="feriaVerde" onChange={(e) => actualizarOrden(e)} value={orden.feriaVerde}
                        type="text" aria-label="Feria Verde" placeholder="Feria Verde" class="form-control input-form" />
                    <span class="input-group-text bg-span">Estado:</span>
                    <select name="estado" className="form-control input-form" caret
                        onChange={(e) => actualizarOrden(e)} value={orden.estado}>
                        {estados.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Reservados:</span>
                    <input name="ordenados" onChange={(e) => actualizarOrden(e)} value={orden.ordenados}
                        type="text" aria-label="Ordenados" placeholder="Reservados" class="form-control input-form" />
                    <span class="input-group-text bg-span">Usados:</span>
                    <input name="usados" onChange={(e) => actualizarOrden(e)} value={orden.usados}
                        type="text" aria-label="Usados" placeholder="Usados" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Sin usar:</span>
                    <input name="sinUsar" onChange={(e) => actualizarOrden(e)} value={orden.sinUsar}
                        type="text" aria-label="Sin usar" placeholder="Sin usar" class="form-control input-form" />
                    <span class="input-group-text bg-span">Devueltos:</span>
                    <input name="devueltos" onChange={(e) => actualizarOrden(e)} value={orden.devueltos}
                        type="text" aria-label="Devueltos" placeholder="Devueltos" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Fecha finalizacion:</span>
                    <input name="fechaFinalizacion" onChange={(e) => actualizarOrden(e)} value={orden.fechaFinalizacion}
                        type="text" aria-label="Fecha finalizacion" placeholder="Fecha finalizacion" class="form-control input-form" />
                    <span class="input-group-text bg-span">Monto (CRC):</span>
                    <input name="monto" onChange={(e) => actualizarOrden(e)} value={orden.monto}
                        type="text" aria-label="Monto (CRC)" placeholder="Monto (CRC)" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Agregar producto:</span>
                    <select name="productos" className="form-control input-form-end" caret
                        onChange={(e) => agregarDetalle(e)} value={orden.productos}>
                        {productos.map(item => (
                            <option key={item.sku} value={item.sku}>{item.sku}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row pt-4 ps-4">
                <div className="col text-start pt-1">
                    <h2>Detalle de productos:</h2>
                </div>
            </div>

            <div className="row pt-4">
                <div class="input-group">
                    <span class="col input-group-text bg-span">SKU</span>
                    <span class="col input-group-text bg-span">Reservados</span>
                    <span class="col input-group-text bg-span">Devueltos</span>
                    <span class="col input-group-text bg-span">Usados</span>
                    <span class="col input-group-text bg-span">Sin usar</span>
                    <span class="col input-group-text bg-span">Precio descuento</span>
                </div>
                {
                    (detalles.length < 1) ? (
                        <div class="input-group">
                            <span class="col input-group-text bg-span">-</span>
                            <input class="col form-control input-form-end" name="-"
                                type="text" aria-label="-" placeholder="-" />
                            <input class="col form-control input-form-end" name="-"
                                type="text" aria-label="-" placeholder="-" />
                            <input class="col form-control input-form-end" name="-"
                                type="text" aria-label="-" placeholder="-" />
                            <input class="col form-control input-form-end" name="-"
                                type="text" aria-label="-" placeholder="-" />
                            <input class="col form-control input-form-end" name="-"
                                type="text" aria-label="-" placeholder="-" />
                        </div>
                    ) : (
                        detalles.map((item, index) => (
                            <div class="input-group">
                                <span class="col input-group-text bg-span">{item.sku}</span>
                                <input class="col form-control input-form-end" name="ordenados"
                                    type="number" value={item.ordenados}
                                    onChange={e => handleInputChange(index, 'ordenados', parseInt(e.target.value))} />
                                <input class="col form-control input-form-end" name="devueltos"
                                    type="number" value={item.devueltos}
                                    onChange={e => handleInputChange(index, 'devueltos', parseInt(e.target.value))} />
                                <input class="col form-control input-form-end" name="usados"
                                    type="number" value={item.usados}
                                    onChange={e => handleInputChange(index, 'usados', parseInt(e.target.value))} />
                                <input class="col form-control input-form-end" name="sinUsar"
                                    type="number" value={item.sinUsar}
                                    onChange={e => handleInputChange(index, 'sinUsar', parseInt(e.target.value))} />
                                <input class="col form-control input-form-end" name="precioDescuento"
                                    type="number" aria-label="-" value="0" />
                            </div>
                        ))
                    )
                }
            </div>
            <div className="row m-4 text-center">
                <div className="col">
                    <button type="submit" className="btn bt-confirmar">Confirmar</button>
                </div>
            </div>
        </form></div>
         )}</div>
    );
}
export default DetallesOrden;