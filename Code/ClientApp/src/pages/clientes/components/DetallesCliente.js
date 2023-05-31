import '../VerCliente.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ImgPlaceholder from '../../../assets/ImgPlaceholder.jpg'
import FilaDetalles from './FilaDetalles'


{/* Componente para consultar los datos de un producto */ }
function DetallesProducto(props) {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [id, setId] = useState(props.id)

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/clientes', {
            replace: true,
        });
    };

    { /* Metodo para solicitar los datos del producto a la base de datos */ }
    const consultarProducto = async () => {
        //Pedir a la base de datos los datos del producto usando el id
        {/*setData(metodoParaConsultar(parseInt(id)));*/ }
        setData(parseInt(id));
    };

    useEffect(() => {
        consultarProducto();
    },[]);
    
    return (
        <div>
            <div className="row my-4 px-4 align-items-end">
                <div className="col-2 col-md-2 pt-2 text-end">
                    { /* Utilizar imagen del producto */}
                    <img src={ImgPlaceholder} className="img-fluid img-add" alt="" />
                </div>
                <div className="col-3 text-start img-col">
                    <h2 className="pt-2">data.empresa</h2>
                    <h3 className="pt-2">Ordenes realizadas:</h3>
                    <h3 className="pt-2">Impacto ambiental:</h3>
                </div>
                <div className="col text-start img-col">
                    { /*<h2 className="pt-2">{data.empresa} </h2>*/}
                    <h3 className="pt-2">23 </h3>
                    <h3 className="pt-2">10 kg </h3>
                </div>

                <div className="col pt-2 text-end img-col">
                    <button className="bt-cancelar ps-3 shadow-sm" onClick={regresar} >
                        Editar<BiEdit className="i-cancelar m-1 ms-3" />
                    </button>
                </div>
                {/*<div className="col-2 pt-2 text-end img-col">
                    <button className="bt-cancelar ps-3 shadow-sm" onClick={regresar} >
                        Descontinuar<RiDeleteBin6Line className="i-cancelar m-1 ms-3" />
                    </button>
                </div>*/}
            </div>
            <FilaDetalles text1="Fecha de creacion:" text2="data.Fecha_Creacion" text3="Segmento:" text4="data.Segmento" />
            <FilaDetalles text1="Responsable:" text2="data.Responsable" text3="Prioridad:" text4="data.Prioridad" />
            <FilaDetalles text1="Estado:" text2="data.Estado" text3="Medio de comunicacion:" text4="data.Medio_Comunicacion" />
            <FilaDetalles text1="Contacto:" text2="data.Contacto" text3="Telefono:" text4="data.Telefono" />
            <div className="row mb-4">
                <div className="col-2 mx-0 ps-3 pe-0">
                    <span className="input-group-text bg-spanv ">Correo:</span>
                </div>
                <div className="col mx-0 px-0">
                    <span className="input-group-text bg-textv border-text-end">data.Correo</span>
                </div>
                <div className="col-2 mx-0 px-0">
                    <span className="input-group-text bg-spanv ">Pagina Web:</span>
                </div>
                <div className="col mx-0  ps-0 pe-3">
                    <span className="input-group-text bg-textv border-text-end">data.Pagina_Web</span>
                </div>
            </div>
        </div>
    );
}

export default DetallesProducto;