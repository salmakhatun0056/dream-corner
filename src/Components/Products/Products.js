import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('fackdata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='pro-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="selected-container">
                <p>Selected Clothes </p>
            </div>
        </div>
    );
};

export default Products;