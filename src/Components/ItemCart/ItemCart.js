import React from 'react';
import { useCartContext } from '../Context/CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      
      <div className="itemCart">
        <img src={product.image} alt={product.title} />
        <div>
          <p>Título: {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unit.: US $ {product.price}</p>
          <p>Subtotal: US $ {product.quantity * product.price}</p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
      
    );
};

export default ItemCart;