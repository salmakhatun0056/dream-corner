import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ clickHandler, product }) => {
    const { name, img, price } = product

    return (
        <div className='product'>
            <div className='product-info'>
                <img style={{ width: '250px', height: '150px' }} src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => clickHandler(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;