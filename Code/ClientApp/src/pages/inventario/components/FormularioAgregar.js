import '../AgregarProducto.css'
import { useNavigate } from 'react-router-dom'
import { MdCancelPresentation } from "react-icons/md";
import ImgPlaceholder from '../../../assets/AddImgPlaceholder.jpg'

{/* Componente para ingresar los datos de un nuevo producto */ }
function FormularioAgregar(props) {
    const navigate = useNavigate();

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/inventario', {
            replace: true,
        });
    };

    { /* Metodo para solicitar agregar los datos del formulario a la base de datos */ }
    const confirmar = e => {
        e.preventDefault();
        // Agregar a la base de datos

        // Regresar a la tabla de productos
        navigate('/inventario', {
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
                    <h2 className="pt-2">SKU: </h2>
                    <input type="text" aria-label="SKU" placeholder="Ingresar SKU" className="ms-3 form-control input-form-end"></input>
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
                    <input type="text" aria-label="Nombre" placeholder="Nombre" class="form-control input-form" />
                    <span class="input-group-text bg-span">Familia:</span>
                    <input type="text" aria-label="Familia" placeholder="Familia" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Categoria:</span>
                    <input type="text" aria-label="Categoria" placeholder="Categoria" class="form-control input-form" />
                    <span class="input-group-text bg-span">Color:</span>
                    <input type="text" aria-label="Color" placeholder="Color" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Descripcion:</span>
                    <input type="text" aria-label="Descripcion" placeholder="Descripcion" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Dimensiones:</span>
                    <input type="text" aria-label="Dimensiones" placeholder="Dimensiones" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Peso:</span>
                    <input type="text" aria-label="Peso recipiente" placeholder="Peso recipiente" class="form-control input-form" />
                    <span class="input-group-text bg-span">Peso referencia:</span>
                    <input type="text" aria-label="Peso desechable" placeholder="Peso desechable" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Precio alquiler:</span>
                    <input type="text" aria-label="Precio alquiler" placeholder="Precio alquiler" class="form-control input-form" />
                    <span class="input-group-text bg-span">Precio retail:</span>
                    <input type="text" aria-label="Precio retail" placeholder="Precio retail" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Cantidad total:</span>
                    <input type="text" aria-label="Cantidad total" placeholder="Cantidad total" class="form-control input-form-end" />
                    <span class="input-group-text bg-span">Cantidad disponible:</span>
                    <input type="text" aria-label="Cantidad disponible" placeholder="Cantidad disponible" class="form-control input-form-end" />
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