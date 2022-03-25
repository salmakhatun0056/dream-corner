import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('fackdata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const clickHandler = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='pro-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        clickHandler={clickHandler}
                    ></Product>)
                }
            </div>
            <div className="selected-container">
                <p>Selected Clothes </p>
                <p>Selected Item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Products;