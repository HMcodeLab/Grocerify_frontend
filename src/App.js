
import { createContext, useState } from 'react';
import { BASE_URL_PRODUCTS } from './Api/api';
import './App.css';
import Router from './Routes/route';

export const Globalinfo = createContext()
function App() {
  const [count, setcount] = useState(0)
  const [wishcount, setWishcount] = useState(0)
  async function TotalCount() {
    let url = BASE_URL_PRODUCTS + 'api/getcart?mobile=1234567890'
    const data = await fetch(url)
    const response = await data.json()
    setcount(response.cart.length)
    // console.log(response)
    // setData(response.cart)
  }
  async function TotalWishCount() {
    let url = BASE_URL_PRODUCTS + 'api/getwishlist?mobile=1234567890'
    const data = await fetch(url)
    const response = await data.json()
    setWishcount(response.wishlist.length)
    console.log(response.wishlist.length)
    // console.log(response)
    // setData(response.cart)
  }
  return (
    <>
      <Globalinfo.Provider value={{ count, TotalCount, setcount, TotalWishCount, wishcount, setWishcount }}>
        <div className="App">

          <Router />
        </div >
      </Globalinfo.Provider>
    </>
  );
}

export default App;
