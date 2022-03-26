import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { name } = cart
    return (
        <div>
            <p> {name}</p>
        </div>
    );
};

export default Cart;