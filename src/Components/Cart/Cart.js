import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    const { name, price } = cart


    return (
        <div className='cart'>

            <p> {name}</p>
        </div>
    );
};

export default Cart;