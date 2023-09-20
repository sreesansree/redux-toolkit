import React from 'react';
import products from '../../api/products.json';
import './ProductList.css';
import { useSelector } from 'react-redux';
import CartButtons from './CartButtons';



export const ProductList = () => {

    const { cartList } = useSelector((state) => state.cart)
   

     
    console.log(cartList,'cartList');

    return (
        <section className='container'>
            {products?.map((product, key) => (
                <div className="product-container" key={key}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                    <CartButtons product={product} />

                </div>
            ))}
        </section>
    );
}


