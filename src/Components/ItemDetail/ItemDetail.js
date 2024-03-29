import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({item}) => {

    const[goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext()
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(item, quantity);
    }


    return(
        <div className>
            <div className='col-md-4 offset-md-4'>
            <img src={item.image} className='img-fluid' alt={item.name} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>US $ {item.price}</p>
            <p>Cantidad: {item.stock}</p>
            </div>
            <div>
            {goToCart ? <Link to='/cart'>Terminar Compra</Link> :<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />} <br/>
            {goToCart && <Link to='/'> Seguir Comprando</Link>}
            </div>
        </div>

    );

}

export default ItemDetail;