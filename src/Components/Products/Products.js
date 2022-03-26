import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <h3>Selected Clothes </h3>
                {/* <Cart cart={cart}></Cart> */}
                {
                    cart.map(a => <Cart cart={a}></Cart>)
                }
                <button>Choose 1 For Me</button>
                <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Products;