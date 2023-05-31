import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Card.css';
import myImage from '../../../assets/cliente.png';

function Card(props) {
    const navigate = useNavigate();

    const detallesCliente = e => {
        e.preventDefault();
        navigate('detalles/' + props.id);
    };

    return (
        <div className="card" onClick={detallesCliente} >
            <img className="card__image" src={myImage} alt="cliente" />
            <h2 className="card__title">{props.empresa}</h2>
            <p className="card__description">{props.segmento}</p>
        </div>
    );
}

export default Card;
