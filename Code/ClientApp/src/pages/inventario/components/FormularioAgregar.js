import '../AgregarProducto.css'
import { useNavigate } from 'react-router-dom'

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

        navigate('/inventario', {
            replace: true,
        });
    };

    return (
        <form onSubmit={confirmar}>
            <div className="row my-4 px-4">
                <div className="col-2 col-md-2 pt-2 text-center">
                    { /* Agregar Imagen
                           * <input type="file" className=""></input>*/}
                </div>
                <div className="col input-group text-start">
                    <h2 className="pt-2">SKU: </h2>
                    <input type="text" aria-label="SKU" placeholder="Ingresar SKU" className="ms-3 form-control"></input>
                </div>
                <div className="col pt-2 text-end">
                    <button className="" onClick={regresar} >Cancelar</button>
                </div>
            </div>
            <div className="row">
                <div class="input-group">
                    <span class="input-group-text bg-lb">Nombre:</span>
                    <input type="text" aria-label="Nombre" placeholder="Nombre" class="form-control brc" />
                    <span class="input-group-text bg-lb">Familia:</span>
                    <input type="text" aria-label="Familia" placeholder="Familia" class="form-control brc" />
                </div>
                <div class="input-group brc">
                    <span class="input-group-text bg-lb">Categoria:</span>
                    <input type="text" aria-label="Categoria" placeholder="Categoria" class="form-control brc" />
                    <span class="input-group-text bg-lb">Color:</span>
                    <input type="text" aria-label="Color" placeholder="Color" class="form-control brc" />
                </div>
                <div class="input-group brc">
                    <span class="input-group-text bg-lb">Descripcion:</span>
                    <input type="text" aria-label="Descripcion" placeholder="Descripcion" class="form-control brc" />
                </div>
                <div class="input-group brc">
                    <span class="input-group-text bg-lb">Dimensiones:</span>
                    <input type="text" aria-label="Dimensiones" placeholder="Dimensiones" class="form-control brc" />
                </div>
                <div class="input-group brc">
                    <span class="input-group-text bg-lb">Peso recipiente:</span>
                    <input type="text" aria-label="Peso recipiente" placeholder="Peso recipiente" class="form-control brc" />
                    <span class="input-group-text bg-lb">Peso desechable:</span>
                    <input type="text" aria-label="Peso desechable" placeholder="Peso desechable" class="form-control brc" />
                </div>
                <div class="input-group brc">
                    <span class="input-group-text bg-lb">Precio alquiler:</span>
                    <input type="text" aria-label="Precio alquiler" placeholder="Precio alquiler" class="form-control brc" />
                    <span class="input-group-text bg-lb">Precio retail:</span>
                    <input type="text" aria-label="Precio retail" placeholder="Precio retail" class="form-control brc" />
                </div>
                <div class="input-group brc">
                    <span class="input-group-text bg-lb">Cantidad total:</span>
                    <input type="text" aria-label="Cantidad total" placeholder="Cantidad total" class="form-control brc" />
                    <span class="input-group-text bg-lb">Cantidad disponible:</span>
                    <input type="text" aria-label="Cantidad disponible" placeholder="Cantidad disponible" class="form-control brc" />
                </div>
            </div>
            <div className="row m-4 text-center">
                <div className="col">
                    <button type="submit" className="btn bg-lb">Confirmar</button>
                </div>
            </div>
        </form>
    );
}

export default FormularioAgregar;