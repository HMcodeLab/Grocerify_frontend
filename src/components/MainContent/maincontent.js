import React, { useState, useEffect } from 'react'
import styles from './maincontent.module.css'
import Heroimage from '../../Assets/Images/heroimage.png'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Products from '../Products/products';
import { newProducts, TopRatedProducts } from '../../Data/db';
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { ReactComponent as Hotdeals } from '../../Assets/Icons/hotdeals.svg'
import banner3 from '../../Assets/Images/banner3.png'
import serum from '../../Assets/Images/products/serum.png'
import makeup from '../../Assets/Images/products/makeup2.png'
import banner_shirt from '../../Assets/Images/banner_shirt.jpg'
import { BASE_URL_PRODUCTS } from '../../Api/api';

const MainContent = () => {
    const [productData, setProductData] = useState([]);
    // console.log(process.env.BASE_URL_PRODUCTS)

    const fetchData = async () => {
        try {
            const res = await fetch(`${BASE_URL_PRODUCTS}api/products`);
            const response = await res.json();
            // console.log(response);
            setProductData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div style={{ display: "flex", flexDirection: "column", gap: "5vh", padding: "3vh 3vw" }}>
            <div className={styles.hero_image}>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 1,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 2000,
                        speed: 1000,
                        delay: 4,
                        pauseOnHover: false,
                        drag: true,

                    }}>
                    <SplideSlide>
                        <img src={Heroimage} alt="banner  not found" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Heroimage} alt="banner  not found" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Heroimage} alt="banner not found" />
                    </SplideSlide>
                </Splide>
            </div>
            <div className={`${styles.newProducts_main} ${styles.products_main}`}>
                <div className={`${styles.newProducts_top} ${styles.products_top}`}>
                    <h1>New Products</h1>
                    <span>
                        <h5>Show More </h5>
                        <Dropdown />

                    </span>
                </div>
                <Products data={productData.filter((val, id) => (id >= 2 && id <= 5))} />

            </div>
            <div className={styles.banner_main}>
                <img src={banner3} alt="banner not found" />
                <div className={styles.hotdeals_main}>
                    <span className={styles.heading}>
                        <span>

                            <Hotdeals />
                            <h3>Hot Deals</h3>
                        </span>


                    </span>
                    <div >
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 1,
                                pagination: false,
                                perMove: 1,
                                wheel: false,
                                arrows: false,
                                autoplay: true,
                                interval: 2000,
                                speed: 1000,
                                delay: 4,
                                // duration:500,
                                pauseOnHover: false,
                                drag: true,

                            }}
                        >
                            <SplideSlide >
                                <div className={styles.product_card}>
                                    <div className={styles.tag}>New</div>
                                    <img src={serum} alt="" />
                                    <div className={styles.details}>
                                        <h5>KDRFF Hair Serum</h5>

                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide >
                                <div className={styles.product_card}>
                                    <div className={styles.tag}>New</div>
                                    <img src={makeup} alt="" />
                                    <div className={styles.details}>
                                        <h5>KDRFF Hair Serum</h5>

                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>

            </div>

            <div className={`${styles.featured_main} ${styles.products_main}`}>
                <div className={`${styles.featured_top} ${styles.products_top}`}>
                    <h1>Featured Products</h1>
                    <span>
                        <h5>Show More </h5>
                        <Dropdown />

                    </span>
                </div>
                <Products data={productData.filter((val, id) => id <= 3)} />

            </div>

            <div className={styles.banner2}>
                <img src={banner_shirt} alt="banner not found" />
                {/* <span className={styles.banner_tag}>
                    <p>New</p>
                </span> */}
            </div>
            <div className={`${styles.featured_main} ${styles.products_main}`}>
                <div className={`${styles.featured_top} ${styles.products_top}`}>
                    <h1>Top Rated Products</h1>
                    <span>
                        <h5>Show More </h5>
                        <Dropdown />

                    </span>
                </div>
                <Products data={productData} />

            </div>
        </div>
    )
}

export default MainContent