import '../AgregarCliente.css'
import { useNavigate } from 'react-router-dom'
import { MdCancelPresentation } from "react-icons/md";
import ImgPlaceholder from '../../../assets/AddImgPlaceholder.jpg'
import { useEffect, useState } from "react"

{/* Componente para ingresar los datos de un nuevo producto */ }
function FormularioAgregar(props) {
    const counter = parseInt(localStorage.getItem('idc')) || 32
    const [id, setId] = useState(counter)
    const modeloCliente = {
        id: counter,
        empresa: "",
        fechaCreacion: "2020-12-17T00:00:00",
        segmento: "",
        responsable: "",
        prioridad: "",
        estado: "",
        medio: "",
        contacto: "",
        telefono: 0,
        correo: "",
        paginaWeb: ""
    }
    const [cliente, setCliente] = useState(modeloCliente)
    const navigate = useNavigate();

    const actualizarCliente = (e) => {
        setCliente({
            ...cliente,
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

    // Metodo para solicitar agregar los datos del formulario a la base de datos
    const confirmar = async (e) => {
        e.preventDefault();
        // Agregar a la base de datos
        try {
            setId(id + 1)
            const response = await fetch(window.location.origin + "/api/cliente/agregar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });

        } catch (err) {
            console.log('Error: ', err)
        }
        setId(id + 1);
        navigate('/clientes', {
            replace: true,
        });
    };

    useEffect(() => {
        console.log(JSON.stringify(cliente), id)
        localStorage.setItem('idc', (id).toString())
    }, [id, cliente])

    return (
        <form onSubmit={confirmar}>
            <div className="row my-4 px-4 align-items-end">
                <div className="col-2 col-md-2 pt-2 text-end">
                    <img src={ImgPlaceholder} className="img-fluid img-add" alt="" />
                    { /* Agregar Imagen
                           * <input type="file" className=""></input>*/}
                </div>
                <div className="col input-group text-start img-col">
                    <h2 className="pt-2">Nombre: </h2>
                    <input name="empresa" onChange={(e) => actualizarCliente(e)} value={cliente.empresa}
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
                    <input name="fechaCreacion" onChange={(e) => actualizarCliente(e)} value={cliente.fechaCreacion}
                        type="text" aria-label="Fecha creacion" placeholder="Fecha de creacion" class="form-control input-form" />
                    <span class="input-group-text bg-span">Segmento:</span>
                    <input name="segmento" onChange={(e) => actualizarCliente(e)} value={cliente.segmento}
                        type="text" aria-label="Segmento" placeholder="Segmento" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Responsable:</span>
                    <input name="responsable" onChange={(e) => actualizarCliente(e)} value={cliente.responsable}
                        type="text" aria-label="Responsable" placeholder="Responsable" class="form-control input-form" />
                    <span class="input-group-text bg-span">Prioridad:</span>
                    <input name="prioridad" onChange={(e) => actualizarCliente(e)} value={cliente.prioridad}
                        type="text" aria-label="Prioridad" placeholder="Prioridad" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Estado:</span>
                    <input name="estado" onChange={(e) => actualizarCliente(e)} value={cliente.estado}
                        type="text" aria-label="Estado" placeholder="Estado" class="form-control input-form" />
                    <span class="input-group-text bg-span">Medio comunicacion:</span>
                    <input name="medio" onChange={(e) => actualizarCliente(e)} value={cliente.medio}
                        type="text" aria-label="Medio comunicacion" placeholder="Medio comunicacion" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Nombre contacto:</span>
                    <input name="contacto" onChange={(e) => actualizarCliente(e)} value={cliente.contacto}
                        type="text" aria-label="Nombre contacto" placeholder="Nombre contacto" class="form-control input-form" />
                    <span class="input-group-text bg-span">Telefono:</span>
                    <input name="telefono" onChange={(e) => actualizarCliente(e)} value={cliente.telefono}
                        type="number" aria-label="Telefono" placeholder="Telefono" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Correo:</span>
                    <input name="correo" onChange={(e) => actualizarCliente(e)} value={cliente.correo}
                        type="text" aria-label="Correo" placeholder="Correo" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Pagina Web:</span>
                    <input name="paginaWeb" onChange={(e) => actualizarCliente(e)} value={cliente.paginaWeb}
                        type="text" aria-label="Pagina Web" placeholder="Pagina Web" class="form-control input-form-end" />
                </div>
            </div>
            <div className="row m-4 text-center">
                <div className="col">
                    <button type="submit" className="btn bt-confirmar">Confirmar</button>
                </div>
            </div>
        </form>
    );
}

export default FormularioAgregar;