//1 . Provider (so, inject cheyyan help cheyunath e provider aayirikum)

//2 . Store (elaa stateum ee store il aayirikum irikunnath,so e store aayirikum react lek inject cheyunnath)

//3 . Reducer ( ee reuducer aayirikkum ee actionum state um thammil ulla karyaghal implement cheyyunath);


//4 . Action (button click,cart increament decrement okay e action aayirikkum cheyyunath);

// Store
// Action = Button Click
// Reducer =(inject to)> React 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";








const INITIAL_STATE = { // created state
    cartList: [],
    cartCount: 0,
    userDetail: [],
}

const cartSlice = createSlice({
    name: 'cart', //unique name for identify redux
    initialState: INITIAL_STATE,
    reducers: {
        updateUser: (state, action) => {
            state.userDetail.push(action.payload)

        },
        addToCart: (state, action) => {
            const itemExists = state.cartList.find((item) => item.id === action.payload.id);
            if (itemExists) {
                // count 1 -logic
                state.cartList.forEach((item) => {
                    if (item?.id === action.payload.id) {
                        item.count = 1;
                    }
                })
                return;
            }
            state.cartList.push({
                ...action.payload,
                count: 1,
            });

        },
        increment: (state, action) => {
            const productID = action.payload;
            state.cartList.forEach((item) => {
                if (item?.id === productID) {
                    item.count++;
                }
            })
        },
        decrement: (state, action) => {
            const productID = action.payload;
            state.cartList.forEach((item) => {
                item?.id === productID && item.count--;

            })
        },
    },

});

export const { increment, decrement, addToCart,updateUser } = cartSlice.actions; // exported actions

export default cartSlice.reducer; // exported reducer