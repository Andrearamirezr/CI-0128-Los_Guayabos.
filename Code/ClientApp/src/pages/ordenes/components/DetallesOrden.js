import '../VerOrden.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import FilaDetalles from './FilaDetalles'


{/* Componente para consultar los datos de una orden */ }
const DetallesOrden = (props) => {
    const navigate = useNavigate();
    const [orden, setOrden] = useState()
    const [productos, setProductos] = useState(true)
    const [id, setId] = useState(props.id)
    const [isLoading, setIsLoading] = useState(true);
    const [detalle, setDetalle] = useState([])
    const [detalles, setDetalles] = useState([])

    const agregarDetalle = (item) => {
        setDetalles(prevDetalles => [...prevDetalles, item]);
    };

    const agregarDetalles = (jsonResponse) => {
        detalle.map(item => {
            if (item.consecutivo == jsonResponse.consecutivo) {
                agregarDetalle(item)
            }
        })
        if (productos) { setProductos(false) }
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
    }, [productos])

    const regresar = e => {
        e.preventDefault();
        navigate('/ordenes', {
            replace: true,
        });
    };

    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p> // Mostrar un mensaje de carga mientras isLoading es true
            ) : (
                    <div>
                    <div className="row mb-4">
                        <div className="col-2 col-md-1 pt-1 text-end">
                            <button className="bt-volver" onClick={regresar}>
                                <MdOutlineArrowBackIosNew className="i-volver" />
                            </button>
                        </div>
                        <div className="col text-start pt-1">
                                <h1>{ orden.consecutivo }</h1>
                        </div>
                    </div>
                    <FilaDetalles text1="Fecha de alquiler:" text2={orden.fechaAlquiler} text3="Cliente:" text4={orden.cliente} />
                    <FilaDetalles text1="Feria Verde:" text2={orden.feriaVerde} text3="Estado:" text4={orden.estado} />
                    <FilaDetalles text1="Reservados:" text2={orden.ordenados} text3="Usados:" text4={orden.usados} />
                    <FilaDetalles text1="Sin usar:" text2={orden.sinUsar} text3="Devueltos:" text4={orden.devueltos} />
                        <div className="row mb-4">
                            <div className="col-2 mx-0 ps-3 pe-0">
                                <span className="input-group-text bg-spanv ">Fecha finalizacion:</span>
                            </div>
                            <div className="col mx-0 px-0">
                                <span className="input-group-text bg-textv border-text-end">{orden.fechaFinalizacion}</span>
                            </div>
                            <div className="col-2 mx-0 px-0">
                                <span className="input-group-text bg-spanv ">Monto:</span>
                            </div>
                            <div className="col mx-0  ps-0 pe-3">
                                <span className="input-group-text bg-textv border-text-end">{orden.monto}</span>
                            </div>
                        </div>
                        <div className="row pt-4 ps-4">
                            <div className="col text-start pt-1">
                                <h2>Detalle de productos:</h2>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="input-group">
                                <span className="col input-group-text bg-span">SKU</span>
                                <span className="col input-group-text bg-span">Reservados</span>
                                <span className="col input-group-text bg-span">Devueltos</span>
                                <span className="col input-group-text bg-span">Usados</span>
                                <span className="col input-group-text bg-span">Sin usar</span>
                                <span className="col input-group-text bg-span">Precio descuento</span>
                            </div>
                            <div className="input-group">
                                {
                                    (detalles.length < 1) ? (
                                        <div class="input-group">
                                            <span class="col input-group-text bg-span">-</span>
                                            <span className="col input-group-text bg-textv border-text-end">-</span>
                                            <span className="col input-group-text bg-textv border-text-end">-</span>
                                            <span className="col input-group-text bg-textv border-text-end">-</span>
                                            <span className="col input-group-text bg-textv border-text-end">-</span>
                                            <span className="col input-group-text bg-textv border-text-end">0</span>
                                        </div>
                                    ) : (
                                        detalles.map((item) => (
                                            <div class="input-group">
                                                <span className="col input-group-text bg-span">{ item.sku }</span>
                                                <span className="col input-group-text bg-textv border-text-end">{item.ordenados}</span>
                                                <span className="col input-group-text bg-textv border-text-end">{item.devueltos}</span>
                                                <span className="col input-group-text bg-textv border-text-end">{item.usados}</span>
                                                <span className="col input-group-text bg-textv border-text-end">{item.sinUsar}</span>
                                                <span className="col input-group-text bg-textv border-text-end">0</span>
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                </div>)}
        </div>
    );
}
export default DetallesOrden;