import './AgregarOrden.css'
import { useNavigate } from 'react-router-dom'
import FormularioAgregar from './components/FormularioAgregar';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react"
import { MdCancelPresentation } from "react-icons/md";

{/* Pagina para agregar una orden nueva */ }
const AgregarOrden = () => {
    const navigate = useNavigate();

    { /* Metodo para regresar a la pagina anterior */}
    const regresar = e => {
        e.preventDefault();
        navigate('/ordenes', {
            replace: true,
        });
    };

    return (
        <div className="container-fluid bg-ap p-4 min-vh-100">
            <div className="bg-surface m-4 p-4 rounded-4 shadow">
                <div className="row">
                    <div className="col-2 col-md-1 pt-1 text-end">
                        <button className="bt-volver" onClick={regresar}>
                            <MdOutlineArrowBackIosNew className="i-volver" />
                        </button>
                    </div>
                    <div className="col text-start pt-1">
                        <h1>Agregar nueva orden:</h1>
                    </div>
                    <div className="col pt-2 text-end img-col">
                        <button className="bt-cancelar ps-3 shadow-sm" onClick={regresar} >
                            Cancelar<MdCancelPresentation className="i-cancelar m-1 ms-3" />
                        </button>
                    </div>
                </div>
                <FormularioAgregar />
                
            </div>
        </div>
    );
}

export default AgregarOrden;