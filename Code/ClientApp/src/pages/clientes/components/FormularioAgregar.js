import '../AgregarCliente.css'
import { useNavigate } from 'react-router-dom'
import { MdCancelPresentation } from "react-icons/md";
import ImgPlaceholder from '../../../assets/AddImgPlaceholder.jpg'

{/* Componente para ingresar los datos de un nuevo producto */ }
function FormularioAgregar(props) {
    const navigate = useNavigate();

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/clientes', {
            replace: true,
        });
    };

    { /* Metodo para solicitar agregar los datos del formulario a la base de datos */ }
    const confirmar = e => {
        e.preventDefault();
        // Agregar a la base de datos

        // Regresar a la tabla de productos
        navigate('/clientes', {
            replace: true,
        });
    };

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
                    <input type="text" aria-label="nombre" placeholder="Ingresar Nombre" className="ms-3 form-control input-form-end"></input>
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
                    <input type="text" aria-label="Fecha creacion" placeholder="Fecha de creacion" class="form-control input-form" />
                    <span class="input-group-text bg-span">Segmento:</span>
                    <input type="text" aria-label="Segmento" placeholder="Segmento" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Responsable:</span>
                    <input type="text" aria-label="Responsable" placeholder="Responsable" class="form-control input-form" />
                    <span class="input-group-text bg-span">Prioridad:</span>
                    <input type="text" aria-label="Prioridad" placeholder="Prioridad" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Estado:</span>
                    <input type="text" aria-label="Estado" placeholder="Estado" class="form-control input-form" />
                    <span class="input-group-text bg-span">Medio comunicacion:</span>
                    <input type="text" aria-label="Medio comunicacion" placeholder="Medio comunicacion" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Nombre contacto:</span>
                    <input type="text" aria-label="Nombre contacto" placeholder="Nombre contacto" class="form-control input-form" />
                    <span class="input-group-text bg-span">Telefono:</span>
                    <input type="text" aria-label="Telefono" placeholder="Telefono" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Correo:</span>
                    <input type="text" aria-label="Correo" placeholder="Correo" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Pagina Web:</span>
                    <input type="text" aria-label="Pagina Web" placeholder="Pagina Web" class="form-control input-form-end" />
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