
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NavList from './components/Navbar/NavList';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import Register from './components/Register/register';
import Login from './components/Login/login';
import ProductPage from './components/ProductPage/productpage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavList />


      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home />}>

          </Route>
          <Route exact path={'/register'} element={<Register />}>

          </Route>
          <Route exact path={'/login'} element={<Login />}>

          </Route>
          <Route exact path={'/products'} element={<ProductPage />}>

          </Route>
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
