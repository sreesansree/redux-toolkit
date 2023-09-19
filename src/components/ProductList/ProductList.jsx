import React, { useEffect, useState } from 'react';
import products from '../../api/products.json';
import BeforeCart from '../ProductList/CartButtons/BeforeCart';
import AddCart from '../ProductList/CartButtons/AfterCart'
import './ProductList.css';
import { useSelector ,useDispatch} from 'react-redux';
import CartButtons from './CartButtons';



export const ProductList = () => {

    const { cartList } = useSelector((state) => state.cart)
   
    const dispatch = useDispatch();
     
    console.log(cartList);

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


