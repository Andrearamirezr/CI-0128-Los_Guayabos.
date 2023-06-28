import './VerOrden.css'
import { useParams } from 'react-router-dom'
import DetallesOrden from './components/DetallesOrden';

{/* Pagina para ver en detalle un producto */ }
const VerOrden = () => {
    const params = useParams();

    return (
        <div className="container-fluid bg-vp p-4 min-vh-100">
            <div className="bg-surface m-4 p-4 rounded-4 shadow">
                <DetallesOrden id={params.id} />
            </div>
        </div>
    );
}

export default VerOrden;