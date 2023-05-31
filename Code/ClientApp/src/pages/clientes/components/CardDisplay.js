import React, { useState, useEffect } from 'react';
import Card from './Card';
import myImage from '../../../assets/cliente.png';

const CardDisplay = () => {
    const [clientes, setClientes] = useState([])

    const mostrarClientes = async () => {
        const response = await fetch("api/cliente/obtener")
        if (response.ok) {
            const data = await response.json()
            setClientes(data)
        } else {
            console.log("error al obtener clientes")
        }
    }

    useEffect(() => {
        mostrarClientes()
    }, [])

    return (
        <div className="App p-3">
            {
                (clientes.length < 1) ? (
                    <div className="row text-center pt-4">
                        <h2>No hay clientes por mostrar</h2>
                    </div>
                ) : (
                    clientes.map(card => (
                        <Card
                            id={card.id}
                            empresa={card.empresa}
                            segmento={card.segmento}
                        />)
                ))
            }
        </div>
    );
}

export default CardDisplay;
