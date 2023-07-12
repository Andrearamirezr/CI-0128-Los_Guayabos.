import '../VerCliente.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ImgPlaceholder from '../../../assets/ImgPlaceholder.jpg'
import FilaDetalles from './FilaDetalles'


{/* Componente para consultar los datos de un cliente */ }
function DetallesCliente(props) {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [id, setId] = useState(props.id)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        consultarCliente()
    }, [data])

    const consultarCliente = async () => {
        const response = await fetch(window.location.origin + "/api/cliente/ver/" + parseInt(id))
        const jsonResponse = await response.json();
        setData(jsonResponse)
        console.log(data)
        setIsLoading(false);
    }
    
    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p> // Mostrar un mensaje de carga mientras isLoading es true
            ) : (
                <div>
                <div className="row my-4 px-4 align-items-end">
                    <div className="col-2 col-md-2 pt-2 text-end">
                        { /* Utilizar imagen del producto */}
                        <img src={ImgPlaceholder} className="img-fluid img-add" alt="" />
                    </div>
                    <div className="col-3 text-start img-col">
                                <h2 className="pt-2">{data.empresa}</h2>
                        <h3 className="pt-2">Impacto ambiental:</h3>
                    </div>
                    <div className="col text-start img-col">
                        { /*<h2 className="pt-2">{data.empresa} </h2>*/}
                        <h3 className="pt-2">10 kg </h3>
                    </div>
                    {/*<div className="col-2 pt-2 text-end img-col">
                        <button className="bt-cancelar ps-3 shadow-sm" onClick={regresar} >
                            Descontinuar<RiDeleteBin6Line className="i-cancelar m-1 ms-3" />
                        </button>
                    </div>*/}
                </div>
                        <FilaDetalles text1="Fecha de creacion:" text2={data.fechaCreacion} text3="Segmento:" text4={data.segmento} />
                        <FilaDetalles text1="Responsable:" text2={data.responsable} text3="Prioridad:" text4={data.prioridad} />
                        <FilaDetalles text1="Estado:" text2={data.estado} text3="Medio de comunicacion:" text4={data.medio} />
                        <FilaDetalles text1="Contacto:" text2={data.contacto} text3="Telefono:" text4={data.telefono} />
                <div className="row mb-4">
                    <div className="col-2 mx-0 ps-3 pe-0">
                        <span className="input-group-text bg-spanv ">Correo:</span>
                    </div>
                    <div className="col mx-0 px-0">
                                <span className="input-group-text bg-textv border-text-end">{data.correo}</span>
                    </div>
                    <div className="col-2 mx-0 px-0">
                        <span className="input-group-text bg-spanv ">Pagina Web:</span>
                    </div>
                    <div className="col mx-0  ps-0 pe-3">
                                <span className="input-group-text bg-textv border-text-end">{data.paginaWeb}</span>
                    </div>
                </div>
                </div>)}
        </div>
    );
}

export default DetallesCliente;