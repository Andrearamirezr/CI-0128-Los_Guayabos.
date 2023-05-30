import React, { useState, useEffect } from 'react';
import Card from './Card';
import myImage from '../../../assets/cliente.png';

const CardDisplay = () => {
    const [data, setData] = useState()

    const consultarClientes = async () => {
        //Pedir a la base de datos los datos del producto usando el id
        {/*setData(metodoParaConsultar(parseInt(sku)));*/ }
        setData();
    };

    useEffect(() => {
        consultarClientes();
    }, []);

    const cardsData = [
        {
            id: 1,
            image: myImage,
            title: 'Empresa 1',
            description: 'Feria Verde'
        },
        {
            id: 2,
            image: myImage,
            title: 'Empresa 2',
            description: 'Restaurante'
        },
        {
            id: 3,
            image: myImage,
            title: 'Empresa 3',
            description: 'Panaderia'
        },
        {
            id: 4,
            image: myImage,
            title: 'Empresa 4',
            description: 'Restaurante'
        },
        {
            id: 5,
            image: myImage,
            title: 'Empresa 5',
            description: 'Soda'
        },
        {
            id: 6,
            image: myImage,
            title: 'Empresa 6',
            description: 'Panaderia'
        },
        {
            id: 7,
            image: myImage,
            title: 'Empresa 7',
            description: 'Soda'
        },
        {
            id: 8,
            image: myImage,
            title: 'Empresa 8',
            description: 'Panaderia'
        },
        {
            id: 9,
            image: myImage,
            title: 'Empresa 9',
            description: 'Feria Verde'
        },
        {
            id: 10,
            image: myImage,
            title: 'Empresa 10',
            description: 'Feria Verde'
        },
        {
            id: 11,
            image: myImage,
            title: 'Empresa 11',
            description: 'Feria Verde'
        },
        {
            id: 12,
            image: myImage,
            title: 'Empresa 12',
            description: 'Panaderia'
        },
        {
            id: 13,
            image: myImage,
            title: 'Empresa 13',
            description: 'Feria Verde'
        },
        {
            id: 14,
            image: myImage,
            title: 'Empresa 14',
            description: 'Panaderia'
        }
    ];

    const cards = cardsData.map(card => (
        <Card
            key={card.id}
            title={card.title}
            description={card.title}
        />
    ));

    return (
        <div className="App p-3">
            {cards}
        </div>
    );
}

export default CardDisplay;
