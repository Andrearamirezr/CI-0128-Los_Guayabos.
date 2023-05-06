import './AgregarProducto.css'
import { useNavigate } from 'react-router-dom'
import FormularioAgregar from './components/FormularioAgregar';

{/* Pagina para agregar un producto nuevo */ }
const AgregarProducto = () => {
    const navigate = useNavigate();

    { /* Metodo para regresar a la pagina anterior */}
    const regresar = e => {
        e.preventDefault();
        navigate('/inventario', {
            replace: true,
        });
    };

    return (
        <div className="container-fluid bg-ap p-4 min-vh-100">
            <div className="bg-surface m-4 p-4 rounded-4 shadow min-vh-100">
                <div className="row">
                    <div className="col-2 col-md-1 pt-2 text-end">
                        <button className="" onClick={regresar} >Atras</button>
                    </div>
                    <div className="col text-start">
                        <h1>Agregar producto</h1>
                    </div>
                </div>
                <FormularioAgregar />
                
            </div>
        </div>
    );
}

export default AgregarProducto;