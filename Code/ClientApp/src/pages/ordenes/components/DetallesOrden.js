import '../VerOrden.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import FilaDetalles from './FilaDetalles'


{/* Componente para consultar los datos de una orden */ }
const DetallesOrden = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [id, setId] = useState(props.id)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        consultarOrden()
    }, [data])

    const consultarOrden = async () => {
        const response = await fetch(window.location.origin + "/api/orden/ver/" + parseInt(id))
        const jsonResponse = await response.json();
        setData(jsonResponse)
        console.log(data)
        setIsLoading(false);
    }

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
                                <h1>{ data.consecutivo }</h1>
                        </div>
                    </div>
                    <FilaDetalles text1="Fecha de alquiler:" text2={data.fechaAlquiler} text3="Cliente:" text4={data.cliente} />
                    <FilaDetalles text1="Feria Verde:" text2={data.feriaVerde} text3="Estado:" text4={data.estado} />
                    <FilaDetalles text1="Reservados:" text2={data.ordenados} text3="Usados:" text4={data.usados} />
                    <FilaDetalles text1="Sin usar:" text2={data.sinUsar} text3="Devueltos:" text4={data.devueltos} />
                        <div className="row mb-4">
                            <div className="col-2 mx-0 ps-3 pe-0">
                                <span className="input-group-text bg-spanv ">Fecha finalizacion:</span>
                            </div>
                            <div className="col mx-0 px-0">
                                <span className="input-group-text bg-textv border-text-end">{data.fechaFinalizacion}</span>
                            </div>
                            <div className="col-2 mx-0 px-0">
                                <span className="input-group-text bg-spanv ">Monto:</span>
                            </div>
                            <div className="col mx-0  ps-0 pe-3">
                                <span className="input-group-text bg-textv border-text-end">{data.monto}</span>
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
                                <span className="col input-group-text bg-span">Sin usar</span>
                                <span className="col input-group-text bg-span">Usados</span>
                                <span className="col input-group-text bg-span">Devueltos</span>
                                <span className="col input-group-text bg-span">Precio descuento</span>
                            </div>
                            <div className="input-group">
                                { /* Mapear productos de orden */}
                                <span className="col input-group-text bg-span">-</span>
                                <span className="col input-group-text bg-textv border-text-end">-</span>
                                <span className="col input-group-text bg-textv border-text-end">-</span>
                                <span className="col input-group-text bg-textv border-text-end">-</span>
                                <span className="col input-group-text bg-textv border-text-end">-</span>
                                <span className="col input-group-text bg-textv border-text-end">-</span>
                            </div>
                        </div>
                </div>)}
        </div>
    );
}
export default DetallesOrden;