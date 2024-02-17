import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import NavList from '../components/Navbar/NavList';
import Addtocart from '../components/AddToCart';
import AddToWishlist from '../components/AddToWishlist'
import Prod from '../components/Product/index'
import Home from '../components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../components/Register/register';
import Login from '../components/Login/login';
import ProductPage from '../components/ProductPage/productpage';
import VerifyOTP from '../components/verifyOTP/verifyOTP';
import FeaturedStore from '../components/Stores/FeaturedStore';
import ShopRegistration from '../components/shop_register/shop_register';
import Footer from '../components/Footer';
import Account from '../components/Account/Account';
import Addresses from '../components/Address/Addresss';
// import Orders from '../components/Orders/orders';
import MyOrders from '../components/Orders';
import AddAddress from '../components/Address/AddAddress';
import PaymentOptions from '../components/Account/PaymentOptions';
import ContactUs from '../components/Account/ContactUs';
import Coupons from '../components/Account/coupons';
import ShippingPolicy from '../components/policies/ShippingPolicy';
import ReturnPolicy from '../components/policies/ReturnPolicy';
import Frequency from '../components/policies/Frequency';
import MoreStore from '../components/Stores/MoreStore';

const Router = () => {
    return (
        <div>



            <BrowserRouter>
                <Navbar />
                <NavList />
                <Routes>
                    <Route exact path={'/'} element={<Home />}>

                    </Route>
                    <Route exact path={'/register'} element={<Register />}>

                    </Route>
                    <Route exact path={'/login'} element={<Login />}>

                    </Route>
                    <Route exact path={'/products'} element={<ProductPage />}>

                    </Route>
                    <Route exact path={'/verify_otp'} element={<VerifyOTP />}>

                    </Route>
                    <Route exact path={'/cart'} element={<Addtocart />}>

                    </Route>
                    <Route exact path={'/wishlist'} element={<AddToWishlist />}>

                    </Route>
                    <Route exact path={'/product/new'} element={<Prod />}>

                    </Route>
                    <Route exact path={'/stores'} element={<FeaturedStore />}>

                    </Route>
                    <Route exact path={'/stores/more_store'} element={<MoreStore />}>

                    </Route>
                    <Route exact path={'/shop_registration'} element={<ShopRegistration />}>

                    </Route>
                    <Route exact path={'/account'} element={<Account />}>

                    </Route>
                    <Route exact path={'/account/myOrders'} element={<MyOrders />}>

                    </Route>
                    <Route exact path={'/account/address'} element={<Addresses />}>

                    </Route>
                    <Route exact path={'/account/addresses/add_address'} element={<AddAddress />}>

                    </Route>
                    <Route exact path={'/account/addresses/edit_address'} element={<AddAddress />}>

                    </Route>
                    <Route exact path={'/account/your_information'} element={<AddAddress />}>

                    </Route>
                    <Route exact path={'/account/payment'} element={<PaymentOptions />}>

                    </Route>
                    <Route exact path={'/contact_us'} element={<ContactUs />}>

                    </Route>
                    <Route exact path={'/account/coupons'} element={<Coupons />}>

                    </Route>
                    <Route exact path={'/shipping_policy'} element={<ShippingPolicy />}>

                    </Route>
                    <Route exact path={'/return_policy'} element={<ReturnPolicy />}>

                    </Route>
                    <Route exact path={'/faq'} element={<Frequency />}>

                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter >
        </div >
    )
}

export default Router