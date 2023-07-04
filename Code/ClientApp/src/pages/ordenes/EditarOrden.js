import './VerOrden.css'
import { useParams } from 'react-router-dom'
import FormularioEditarOrden from './components/FormularioEditarOrden';

{/* Pagina para editar un producto */ }
const EditarOrden = () => {
    const params = useParams();
    return (
        <div className="container-fluid bg-vp p-4 min-vh-100">
            <div className="bg-surface m-4 p-4 rounded-4 shadow">
                <FormularioEditarOrden id={params.id} />
            </div>
        </div>
    );
}

export default EditarOrden;