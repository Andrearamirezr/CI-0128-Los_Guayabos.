import '../AgregarProducto.css'
import { useNavigate } from 'react-router-dom'
import { MdCancelPresentation } from "react-icons/md";
import ImgPlaceholder from '../../../assets/AddImgPlaceholder.jpg'
import { useState} from "react"

const modeloProducto = {
    id: 7,
    sku: "",
    nombre: "",
    familia: "",
    categoria: "",
    color: "",
    descripcion: "",
    dimensiones: "",
    peso: 0.0,
    pesoReferencia: 0.0,
    precioAlquiler: 0.0,
    precioRetail: 0.0,
    cantidadTotal: 0.0,
    cantidadDisponible: 0.0,
    lote: 0
}

{/* Componente para ingresar los datos de un nuevo producto */ }
const FormularioAgregar = (props) => {
    const [producto, setProducto] = useState(modeloProducto)
    const navigate = useNavigate();

    const actualizarProducto = (e) => {
        setProducto({
            ...producto,
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

    { /* Metodo para solicitar agregar los datos del formulario a la base de datos */ }
    const confirmar = async (producto) => {
        // Agregar a la base de datos
        const response = await fetch("api/producto/agregar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        })
        if (response.ok) {
            // Regresar a la tabla de productos
            navigate('/inventario', {
                replace: true,
            });
        }
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
                    <input name="sku" onChange={(e) => actualizarProducto(e)} value={producto.sku}
                        type="text" aria-label="SKU" placeholder="Ingresar SKU"
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
                    <input name="nombre" onChange={(e) => actualizarProducto(e)} value={producto.nombre}
                        type="text" aria-label="Nombre" placeholder="Nombre" class="form-control input-form" />
                    <span class="input-group-text bg-span">Familia:</span>
                    <input name="familia" onChange={(e) => actualizarProducto(e)} value={producto.familia}
                        type="text" aria-label="Familia" placeholder="Familia" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Categoria:</span>
                    <input name="categoria" onChange={(e) => actualizarProducto(e)} value={producto.categoria}
                        type="text" aria-label="Categoria" placeholder="Categoria" class="form-control input-form" />
                    <span class="input-group-text bg-span">Color:</span>
                    <input name="color" onChange={(e) => actualizarProducto(e)} value={producto.color}
                        type="text" aria-label="Color" placeholder="Color" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Descripcion:</span>
                    <input name="descripcion" onChange={(e) => actualizarProducto(e)} value={producto.descripcion}
                        type="text" aria-label="Descripcion" placeholder="Descripcion" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Dimensiones:</span>
                    <input name="dimensiones" onChange={(e) => actualizarProducto(e)} value={producto.dimensiones}
                        type="text" aria-label="Dimensiones" placeholder="Dimensiones" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Peso:</span>
                    <input name="peso" onChange={(e) => actualizarProducto(e)} value={producto.peso}
                        type="text" aria-label="Peso recipiente" placeholder="Peso" class="form-control input-form" />
                    <span class="input-group-text bg-span">Peso referencia:</span>
                    <input name="pesoReferencia" onChange={(e) => actualizarProducto(e)} value={producto.pesoReferencia}
                        type="text" aria-label="Peso desechable" placeholder="Peso referencia" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Precio alquiler:</span>
                    <input name="precioAlquiler" onChange={(e) => actualizarProducto(e)} value={producto.precioAlquiler}
                        type="text" aria-label="Precio alquiler" placeholder="Precio alquiler" class="form-control input-form" />
                    <span class="input-group-text bg-span">Precio retail:</span>
                    <input name="precioRetail" onChange={(e) => actualizarProducto(e)} value={producto.precioRetail}
                        type="text" aria-label="Precio retail" placeholder="Precio retail" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Cantidad total:</span>
                    <input name="cantidadTotal" onChange={(e) => actualizarProducto(e)} value={producto.cantidadTotal}
                        type="text" aria-label="Cantidad total" placeholder="Cantidad total" class="form-control input-form-end" />
                    <span class="input-group-text bg-span">Lote:</span>
                    <input name="lote" onChange={(e) => actualizarProducto(e)} value={producto.lote}
                        type="text" aria-label="Lote" placeholder="Lote" class="form-control input-form-end" />
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