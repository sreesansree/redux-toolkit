import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../../redux/cart';
import './CartButton.css'

const AfterCart = ({cartCount}) => {
  const dispatch = useDispatch()
  return (
    <div className='after-cart'>
      <button className='cart-counter-button' onClick={() => dispatch(decrement())}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-counter-button' onClick={() => dispatch(increment())}  >+</button>

    </div>
  );
}

export default AfterCart;
