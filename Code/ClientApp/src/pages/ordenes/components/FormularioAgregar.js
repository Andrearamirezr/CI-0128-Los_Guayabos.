import '../AgregarOrden.css'
import { useNavigate } from 'react-router-dom'
import { useState} from "react"

const modeloOrden = {
    id: 7,
    consecutivo: "",
    fechaAlquiler: "",
    cliente: "",
    feriaVerde: "",
    estado: "",
    productos: "",
    dimensiones: "",
    reservados: 0.0,
    usados: 0.0,
    sinUsar: 0.0,
    devueltos: 0.0,
    fechaFinalizacion: "",
    monto: 0
}

{/* Componente para ingresar los datos de una nueva Orden */ }
const FormularioAgregar = (props) => {
    const [orden, setOrden] = useState(modeloOrden)
    const navigate = useNavigate();

    const actualizarOrden = (e) => {
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        })
    }

    { /* Metodo para regresar a la pagina anterior */ }
    const regresar = e => {
        e.preventDefault();
        navigate('/ordenes', {
            replace: true,
        });
    };

    { /* Metodo para solicitar agregar los datos del formulario a la base de datos */ }
    const confirmar = async (orden) => {
        // Agregar a la base de datos
        const response = await fetch("api/orden/agregar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(orden)
        })
        if (response.ok) {
            // Regresar a la tabla de ordenes
            navigate('/ordenes', {
                replace: true,
            });
        }
    };

    return (
        <form onSubmit={confirmar}>
            <div className="row pt-4">
                <div class="input-group">
                    <span class="input-group-text bg-span">Fecha Alquiler:</span>
                    <input name="fechaAlquiler" onChange={(e) => actualizarOrden(e)} value={orden.fechaAlquiler}
                        type="text" aria-label="Fecha Alquiler" placeholder="Fecha Alquiler" class="form-control input-form" />
                    <span class="input-group-text bg-span">Cliente:</span>
                    <input name="cliente" onChange={(e) => actualizarOrden(e)} value={orden.cliente}
                        type="text" aria-label="Cliente" placeholder="Cliente" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Feria Verde:</span>
                    <input name="feriaVerde" onChange={(e) => actualizarOrden(e)} value={orden.feriaVerde}
                        type="text" aria-label="Feria Verde" placeholder="Feria Verde" class="form-control input-form" />
                    <span class="input-group-text bg-span">Estado:</span>
                    <input name="estado" onChange={(e) => actualizarOrden(e)} value={orden.estado}
                        type="text" aria-label="Estado" placeholder="Estado" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Productos:</span>
                    <input name="productos" onChange={(e) => actualizarOrden(e)} value={orden.productos}
                        type="text" aria-label="Productos" placeholder="Productos" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Reservados:</span>
                    <input name="reservados" onChange={(e) => actualizarOrden(e)} value={orden.reservados}
                        type="text" aria-label="Reservados" placeholder="Reservados" class="form-control input-form" />
                    <span class="input-group-text bg-span">Usados:</span>
                    <input name="usados" onChange={(e) => actualizarOrden(e)} value={orden.usados}
                        type="text" aria-label="Usados" placeholder="Usados" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Sin usar:</span>
                    <input name="sinUsar" onChange={(e) => actualizarOrden(e)} value={orden.sinUsar}
                        type="text" aria-label="Sin usar" placeholder="Sin usar" class="form-control input-form" />
                    <span class="input-group-text bg-span">Devueltos:</span>
                    <input name="devueltos" onChange={(e) => actualizarOrden(e)} value={orden.devueltos}
                        type="text" aria-label="Devueltos" placeholder="Devueltos" class="form-control input-form" />
                </div>
                <div class="input-group input-form">
                    <span class="input-group-text bg-span">Fecha finalizacion:</span>
                    <input name="fechaFinalizacion" onChange={(e) => actualizarOrden(e)} value={orden.fechaFinalizacion}
                        type="text" aria-label="Fecha finalizacion" placeholder="Fecha finalizacion" class="form-control input-form-end" />
                    <span class="input-group-text bg-span">Monto (CRC):</span>
                    <input name="monto" onChange={(e) => actualizarOrden(e)} value={orden.monto}
                        type="text" aria-label="Monto (CRC)" placeholder="Monto (CRC)" class="form-control input-form-end" />
                </div>
            </div>
            <div className="row pt-4 ps-4">
                <div className="col text-start pt-1">
                    <h2>Detalle de productos:</h2>
                </div>
            </div>

            <div className="row pt-4">
                <div class="input-group">
                    <span class="col input-group-text bg-span">SKU</span>
                    <span class="col input-group-text bg-span">Reservados</span>
                    <span class="col input-group-text bg-span">Sin usar</span>
                    <span class="col input-group-text bg-span">Usados</span>
                    <span class="col input-group-text bg-span">Devueltos</span>
                    <span class="col input-group-text bg-span">Precio descuento</span>
                </div>
                <div class="input-group">
                    <span class="col input-group-text bg-span">-</span>
                    <input class="col form-control input-form-end" name="-"
                        type="text" aria-label="-" placeholder="-" />
                    <input class="col form-control input-form-end" name="-"
                        type="text" aria-label="-" placeholder="-" />
                    <input class="col form-control input-form-end" name="-"
                        type="text" aria-label="-" placeholder="-" />
                    <input class="col form-control input-form-end" name="-"
                        type="text" aria-label="-" placeholder="-" />
                    <input class="col form-control input-form-end" name="-"
                        type="text" aria-label="-" placeholder="-" />
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