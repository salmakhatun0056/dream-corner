import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price } = props.product
    return (
        <div className='product'>
            <div className='product-info'>
                <img style={{ width: '250px', height: '150px' }} src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <button className='btn-cart'>
                    <p>Add To Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;