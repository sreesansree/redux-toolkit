//1 . Provider (so, inject cheyyan help cheyunath e provider aayirikum)

//2 . Store (elaa stateum ee store il aayirikum irikunnath,so e store aayirikum react lek inject cheyunnath)

//3 . Reducer ( ee reuducer aayirikkum ee actionum state um thammil ulla karyaghal implement cheyyunath);


//4 . Action (button click,cart increament decrement okay e action aayirikkum cheyyunath);

// Store
// Action = Button Click
// Reducer =(inject to)> React 

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { // created state
    cartList: [],
    cartCount: 0,
}

const cartSlice = createSlice({
    name: 'cart', //unique name for identify redux
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state,action) => {
           
            state.cartList.push({
            ...action.payload,
            count:1
            })
        },
        increment: (state) => {
            state.cartCount += 1
        },
        decrement: (state) => {
            state.cartCount -= 1
        },
    }
});

export const { increment, decrement, addToCart } = cartSlice.actions; // exported actions

export default cartSlice.reducer; // exported reducer