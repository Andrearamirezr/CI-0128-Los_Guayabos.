import '../VerCliente.css'
import '../AgregarCliente.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { MdCancelPresentation } from "react-icons/md";
import ImgPlaceholder from '../../../assets/AddImgPlaceholder.jpg'

// Componente para editar los datos de un cliente
const FormularioEditarCliente = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const [sku] = useState(props.id)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        consultarCliente()
    }, [])

    const consultarCliente = async () => {
        const response = await fetch(window.location.origin + "/api/cliente/ver/" + parseInt(sku))
        const jsonResponse = await response.json();
        setData(jsonResponse)
        console.log(data)
        setIsLoading(false);
    }

    const actualizarCliente = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/clientes', {
            replace: true,
        });
    };

    // Metodo para solicitar actualizar los datos del formulario a la base de datos
    const confirmar = async (e) => {
        e.preventDefault();
        // Actualiza en la base de datos
        try {
            const response = await fetch(window.location.origin + "/api/cliente/editar/" + parseInt(sku), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

        } catch (err) {
            console.log('Error: ', err)
        }
        navigate('/clientes', {
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
                                <h2 className="pt-2">Nombre: </h2>
                                <input name="empresa" onChange={(e) => actualizarCliente(e)} value={data.empresa}
                                    type="text" aria-label="nombre" placeholder="Ingresar Nombre" className="ms-3 form-control input-form-end"></input>
                            </div>
                            <div className="col pt-2 text-end img-col">
                                <button className="bt-cancelar ps-3 shadow-sm" onClick={regresar} >
                                    Cancelar<MdCancelPresentation className="i-cancelar m-1 ms-3" />
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div class="input-group">
                                <span class="input-group-text bg-span">Fecha de creacion:</span>
                                <input name="fechaCreacion" onChange={(e) => actualizarCliente(e)} value={data.fechaCreacion}
                                    type="text" aria-label="Fecha creacion" placeholder="Fecha de creacion" class="form-control input-form" />
                                <span class="input-group-text bg-span">Segmento:</span>
                                <input name="segmento" onChange={(e) => actualizarCliente(e)} value={data.segmento}
                                    type="text" aria-label="Segmento" placeholder="Segmento" class="form-control input-form" />
                            </div>
                            <div class="input-group input-form">
                                <span class="input-group-text bg-span">Responsable:</span>
                                <input name="responsable" onChange={(e) => actualizarCliente(e)} value={data.responsable}
                                    type="text" aria-label="Responsable" placeholder="Responsable" class="form-control input-form" />
                                <span class="input-group-text bg-span">Prioridad:</span>
                                <input name="prioridad" onChange={(e) => actualizarCliente(e)} value={data.prioridad}
                                    type="text" aria-label="Prioridad" placeholder="Prioridad" class="form-control input-form" />
                            </div>
                            <div class="input-group input-form">
                                <span class="input-group-text bg-span">Estado:</span>
                                <input name="estado" onChange={(e) => actualizarCliente(e)} value={data.estado}
                                    type="text" aria-label="Estado" placeholder="Estado" class="form-control input-form" />
                                <span class="input-group-text bg-span">Medio comunicacion:</span>
                                <input name="medio" onChange={(e) => actualizarCliente(e)} value={data.medio}
                                    type="text" aria-label="Medio comunicacion" placeholder="Medio comunicacion" class="form-control input-form" />
                            </div>
                            <div class="input-group input-form">
                                <span class="input-group-text bg-span">Nombre contacto:</span>
                                <input name="contacto" onChange={(e) => actualizarCliente(e)} value={data.contacto}
                                    type="text" aria-label="Nombre contacto" placeholder="Nombre contacto" class="form-control input-form" />
                                <span class="input-group-text bg-span">Telefono:</span>
                                <input name="telefono" onChange={(e) => actualizarCliente(e)} value={data.telefono}
                                    type="number" aria-label="Telefono" placeholder="Telefono" class="form-control input-form" />
                            </div>
                            <div class="input-group input-form">
                                <span class="input-group-text bg-span">Correo:</span>
                                <input name="correo" onChange={(e) => actualizarCliente(e)} value={data.correo}
                                    type="text" aria-label="Correo" placeholder="Correo" class="form-control input-form" />
                            </div>
                            <div class="input-group input-form">
                                <span class="input-group-text bg-span">Pagina Web:</span>
                                <input name="paginaWeb" onChange={(e) => actualizarCliente(e)} value={data.paginaWeb}
                                    type="text" aria-label="Pagina Web" placeholder="Pagina Web" class="form-control input-form-end" />
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

export default FormularioEditarCliente;