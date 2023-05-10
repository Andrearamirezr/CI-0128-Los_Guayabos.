import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Card.css';
import myImage from '../../../assets/cliente.png';

function Card(props) {
    const navigate = useNavigate();

    const detallesCliente = e => {
        e.preventDefault();
        {/*navigate('detalles/'+toString(props.sku));*/ }
        navigate('detalles/1');
    };

    return (
        <div className="card" onClick={detallesCliente} >
            <img className="card__image" src={myImage} alt={props.title} />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
        </div>
    );
}

export default Card;
