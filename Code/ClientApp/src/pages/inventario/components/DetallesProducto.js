import '../VerProducto.css'
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
    const [sku, setSku] = useState(props.id)

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/inventario', {
            replace: true,
        });
    };

    { /* Metodo para solicitar los datos del producto a la base de datos */ }
    const consultarProducto = async () => {
        //Pedir a la base de datos los datos del producto usando el id
        {/*setData(metodoParaConsultar(parseInt(sku)));*/ }
        setData(parseInt(sku));
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
                <div className="col-1 text-start img-col">
                    <h2 className="pt-2">SKU: </h2>
                </div>
                <div className="col text-start img-col">
                    { /*<h2 className="pt-2">{data.sku} </h2>*/}
                    <h2 className="pt-2">data.sku </h2>
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
            <FilaDetalles text1="Nombre:" text2="data.Nombre" text3="Familia:" text4="data.Familia" />
            <FilaDetalles text1="Categoria:" text2="data.Categoria" text3="Color:" text4="data.Color" />
            <FilaDetalles text1="Descripcion:" text2="data.Descripcion" text3="Dimensiones:" text4="data.Dimensiones" />
            <FilaDetalles text1="Peso:" text2="data.Peso" text3="Peso Referencia:" text4="data.Peso_Referencia" />
            <FilaDetalles text1="Precio alquiler:" text2="data.Precio_Alquiler" text3="Precio retail:" text4="data.Precio_Retail" />
            <div className="row mb-4">
                <div className="col-2 mx-0 ps-3 pe-0">
                    <span className="input-group-text bg-spanv ">Cantidad total:</span>
                </div>
                <div className="col mx-0 px-0">
                    <span className="input-group-text bg-textv border-text-end">data.Cantidad_Total</span>
                </div>
                <div className="col-2 mx-0 px-0">
                    <span className="input-group-text bg-spanv">Cantidad disponible:</span>
                </div>
                <div className="col mx-0 ps-0 pe-3">
                    <span className="input-group-text bg-textv border-text-end">data.Cantidad_Disponible</span>
                </div>
            </div>
        </div>
    );
}

export default DetallesProducto;