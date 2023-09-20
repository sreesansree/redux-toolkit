import React, { useEffect,useRef } from 'react';

import { Header, ProductList } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/cart';
import axios from 'axios';


const App = () => {
  const { userDetail } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  
  const counterRef = useRef(1);
  
  useEffect(() => {
   getUser(counterRef.current)
  }, [])
  
 

  const loadMoreUsers = () => {
    dispatch(getUser(++counterRef.current))
  }

  const getUser =  async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
     dispatch(updateUser( response.data))
};

  return (
    <>
      <Header />
      {/* <button onClick={loadMoreUsers}>Add More Users</button>
      <prev style={{ color: 'white' }}>{JSON.stringify(userDetail)}</prev>
      <br />
      <br /> */}
      <ProductList />
    </>

  );
}

export default App;
