import React from 'react';

const ItemDetail = ({item}) => {
    return(
        <div className='row'>
            <div className='col-md-3 offset-md-3'>
            <img src={item.image} className='img-fluid' alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>US$ {item.price}</p>
            <p>Cantidad: {item.stock}</p>
            </div>

        </div>

    ); 

}

export default ItemDetail;