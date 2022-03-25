import React from 'react';
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
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;