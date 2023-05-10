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
            title: 'Card Title 1',
            description: 'Card description 1'
        },
        {
            id: 2,
            image: myImage,
            title: 'Card Title 2',
            description: 'Card description 2'
        },
        {
            id: 3,
            image: myImage,
            title: 'Card Title 3',
            description: 'Card description 3'
        },
        {
            id: 4,
            image: myImage,
            title: 'Card Title 1',
            description: 'Card description 1'
        },
        {
            id: 5,
            image: myImage,
            title: 'Card Title 2',
            description: 'Card description 2'
        },
        {
            id: 6,
            image: myImage,
            title: 'Card Title 3',
            description: 'Card description 3'
        },
        {
            id: 7,
            image: myImage,
            title: 'Card Title 1',
            description: 'Card description 1'
        },
        {
            id: 8,
            image: myImage,
            title: 'Card Title 2',
            description: 'Card description 2'
        },
        {
            id: 9,
            image: myImage,
            title: 'Card Title 3',
            description: 'Card description 3'
        },
        {
            id: 10,
            image: myImage,
            title: 'Card Title 2',
            description: 'Card description 2'
        },
        {
            id: 11,
            image: myImage,
            title: 'Card Title 3',
            description: 'Card description 3'
        },
        {
            id: 12,
            image: myImage,
            title: 'Card Title 1',
            description: 'Card description 1'
        },
        {
            id: 13,
            image: myImage,
            title: 'Card Title 2',
            description: 'Card description 2'
        },
        {
            id: 14,
            image: myImage,
            title: 'Card Title 3',
            description: 'Card description 3'
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
