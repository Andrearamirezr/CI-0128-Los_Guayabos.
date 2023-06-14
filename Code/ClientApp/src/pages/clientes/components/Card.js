import React from 'react';
import { useNavigate } from 'react-router-dom'
import { BiEdit } from "react-icons/bi"
import './Card.css';
import myImage from '../../../assets/cliente.png';

function Card(props) {
    const navigate = useNavigate();

    const detallesCliente = e => {
        e.preventDefault();
        navigate('detalles/' + props.id);
    };

    const editar = e => {
        e.preventDefault();
        navigate('editar/' + props.id);
    };

    return (
        <div className="card">
            <img className="card__image" onClick={detallesCliente} src={myImage} alt="cliente" />
            <h2 className="card__title" onClick={detallesCliente}>{props.empresa}</h2>
            <p className="card__description" onClick={detallesCliente}>{props.segmento}</p>
            <button className="bt-cancelar ps-3 shadow-sm" onClick={editar} >
                Editar<BiEdit className="i-cancelar m-1 ms-3" />
            </button>
        </div>
    );
}

export default Card;
