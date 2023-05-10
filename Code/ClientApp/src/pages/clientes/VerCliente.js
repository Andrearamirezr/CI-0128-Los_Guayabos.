import './VerCliente.css';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import DetallesCliente from './components/DetallesCliente';

{/* Pagina para ver en detalle un cliente }*/ }
const VerCliente = () => {
    const params = useParams();
    const navigate = useNavigate();

    /* Metodo para regresar a la pagina anterior }*/
    const regresar = e => {
        e.preventDefault();
        navigate('/clientes', {
            replace: true,
        });
    };

    /* Metodo para navegar a la pagina de editar*/
    /*const editar = e => {
        e.preventDefault();
        {/*navigate('clientes/editar/'+toString(props.sku)); }
        navigate('clientes/editar/1', {
            replace: false,
        });
    };  }*/

    return (
        <div className="container-fluid bg-vp p-4 min-vh-100">
            <div className="bg-surface m-4 p-4 rounded-4 shadow">
                <div className="row">
                    <div className="col-2 col-md-1 pt-1 text-end">
                        <button className="bt-volver" onClick={regresar}>
                            <MdOutlineArrowBackIosNew className="i-volver" />
                        </button>
                    </div>
                    <div className="col text-start pt-1">
                        <h1>Detalles cliente</h1>
                    </div>
                </div>
                
                <DetallesCliente id={params.id} />
            </div>
        </div>
    );
}

export default VerCliente;