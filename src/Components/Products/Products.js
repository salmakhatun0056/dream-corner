import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Good from '../Good/Good';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [good, setGood] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const clickHandler = (product) => {
        const proCard = cart.filter(pro => pro.id === product.id)

        if (proCard.length === 0) {
            const newCart = [...cart, product]
            setCart(newCart)
        }
        else {
            alert('Please select different product')
        }

    }
    const chooseOne = () => {
        if (cart.length === 0) {
            return;
        }

        let uniqNumber = Math.round(Math.random() * 10)
        if (uniqNumber < cart.length) {
            setGood(cart[uniqNumber])
        }
        else {
            return chooseOne()
        }

    }
    const chooseAgainBtn = () => {
        console.log(chooseAgainBtn)
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
                <h3>Selected Laptop </h3>
                {
                    cart.map(item =>
                        <Cart cart={item}
                            key={item.id}
                        ></Cart>)
                }
                <button onClick={chooseOne}>Choose 1 For Me</button><br />
                <button onClick={chooseAgainBtn}>Choose Again</button>
                <Good good={good}></Good>
            </div>
        </div>
    );
};

export default Products;