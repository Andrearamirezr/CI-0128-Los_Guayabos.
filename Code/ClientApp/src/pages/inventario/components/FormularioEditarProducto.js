import '../VerProducto.css'
import '../AgregarProducto.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { MdCancelPresentation } from "react-icons/md";
import ImgPlaceholder from '../../../assets/AddImgPlaceholder.jpg'

// Componente para editar los datos de un producto
const FormularioEditarProducto = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [sku] = useState(props.id)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        consultarProducto()
    }, [])

    const consultarProducto = async () => {
        const response = await fetch(window.location.origin + "/api/producto/ver/" + parseInt(sku))
        const jsonResponse = await response.json();
        setData(jsonResponse)
        console.log(data)
        setIsLoading(false);
    }

    const actualizarProducto = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/inventario', {
            replace: true,
        });
    };

    // Metodo para solicitar actualizar los datos del formulario a la base de datos
    const confirmar = async (e) => {
        e.preventDefault();
        // Actualiza en la base de datos
        try {
            const response = await fetch(window.location.origin + "/api/producto/editar/" + parseInt(sku), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

        } catch (err) {
            console.log('Error: ', err)
        }
        navigate('/inventario', {
            replace: true,
        });
    };

    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p> // Mostrar un mensaje de carga mientras isLoading es true
            ) : (
                <form onSubmit={confirmar}>
                    <div className="row my-4 px-4 align-items-end">
                        <div className="col-2 col-md-2 pt-2 text-end">
                            <img src={ImgPlaceholder} className="img-fluid img-add" alt="" />
                            { /* Agregar Imagen
                           * <input type="file" className=""></input>*/}
                        </div>
                        <div className="col input-group text-start img-col">
                            <h2 className="pt-2">SKU: </h2>
                            <input name="sku" onChange={(e) => actualizarProducto(e)} value={data.sku}
                                    type="text" aria-label="SKU" placeholder={data.sku}
                                className="ms-3 form-control input-form-end"></input>
                        </div>
                        <div className="col pt-2 text-end img-col">
                            <button className="bt-cancelar ps-3 shadow-sm" onClick={regresar} >
                                Cancelar<MdCancelPresentation className="i-cancelar m-1 ms-3" />
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div class="input-group">
                            <span class="input-group-text bg-span">Nombre:</span>
                                <input name="nombre" onChange={(e) => actualizarProducto(e)} value={data.nombre}
                                type="text" aria-label="Nombre" placeholder="Nombre" class="form-control input-form" />
                            <span class="input-group-text bg-span">Familia:</span>
                                <input name="familia" onChange={(e) => actualizarProducto(e)} value={data.familia}
                                type="text" aria-label="Familia" placeholder="Familia" class="form-control input-form" />
                        </div>
                        <div class="input-group input-form">
                            <span class="input-group-text bg-span">Categoria:</span>
                                <input name="categoria" onChange={(e) => actualizarProducto(e)} value={data.categoria}
                                type="text" aria-label="Categoria" placeholder="Categoria" class="form-control input-form" />
                            <span class="input-group-text bg-span">Color:</span>
                                <input name="color" onChange={(e) => actualizarProducto(e)} value={data.color}
                                type="text" aria-label="Color" placeholder="Color" class="form-control input-form" />
                        </div>
                        <div class="input-group input-form">
                            <span class="input-group-text bg-span">Descripcion:</span>
                                <input name="descripcion" onChange={(e) => actualizarProducto(e)} value={data.descripcion}
                                type="text" aria-label="Descripcion" placeholder="Descripcion" class="form-control input-form" />
                        </div>
                        <div class="input-group input-form">
                            <span class="input-group-text bg-span">Dimensiones:</span>
                                <input name="dimensiones" onChange={(e) => actualizarProducto(e)} value={data.dimensiones}
                                type="text" aria-label="Dimensiones" placeholder="Dimensiones" class="form-control input-form" />
                        </div>
                        <div class="input-group input-form">
                            <span class="input-group-text bg-span">Peso:</span>
                                <input name="peso" onChange={(e) => actualizarProducto(e)} value={data.peso}
                                type="number" aria-label="Peso recipiente" placeholder="Peso" class="form-control input-form" />
                            <span class="input-group-text bg-span">Peso referencia:</span>
                                <input name="pesoReferencia" onChange={(e) => actualizarProducto(e)} value={data.pesoReferencia}
                                type="number" aria-label="Peso desechable" placeholder="Peso referencia" class="form-control input-form" />
                        </div>
                        <div class="input-group input-form">
                            <span class="input-group-text bg-span">Precio alquiler:</span>
                                <input name="precioAlquiler" onChange={(e) => actualizarProducto(e)} value={data.precioAlquiler}
                                type="number" aria-label="Precio alquiler" placeholder="Precio alquiler" class="form-control input-form" />
                            <span class="input-group-text bg-span">Precio retail:</span>
                                <input name="precioRetail" onChange={(e) => actualizarProducto(e)} value={data.precioRetail}
                                type="number" aria-label="Precio retail" placeholder="Precio retail" class="form-control input-form" />
                        </div>
                        <div class="input-group input-form">
                            <span class="input-group-text bg-span">Cantidad total:</span>
                                <input name="cantidadTotal" onChange={(e) => actualizarProducto(e)} value={data.cantidadTotal}
                                type="number" aria-label="Cantidad total" placeholder="Cantidad total" class="form-control input-form-end" />
                            <span class="input-group-text bg-span">Lote:</span>
                                <input name="lote" onChange={(e) => actualizarProducto(e)} value={data.lote}
                                type="number" aria-label="Lote" placeholder="Lote" class="form-control input-form-end" />
                        </div>
                    </div>
                    <div className="row m-4 text-center">
                        <div className="col">
                            <button type="submit" className="btn bt-confirmar">Confirmar</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default FormularioEditarProducto;