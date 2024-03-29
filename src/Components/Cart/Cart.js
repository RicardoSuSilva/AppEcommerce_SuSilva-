import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import {getFirestore, collection, addDoc } from 'firebase/firestore';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </> 
    );
  }

  return (
    <div className="container fluid">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: US $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
      </div>
  );
};

export default Cart;