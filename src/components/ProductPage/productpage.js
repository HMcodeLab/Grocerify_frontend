import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/sidebar'
import styles from './productPage.module.css'
import Products from '../Products/products';
import { TopRatedProducts } from '../../Data/db';
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { useSearchParams } from 'react-router-dom';
import Heroimage from '../../Assets/Images/electronics.jpg'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { BASE_URL_PRODUCTS } from '../../Api/api';

const ProductPage = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryData, setCategoryData] = useState();
    useEffect(() => {
        console.log(searchParams.get('category'))

    }, [])

    const fetchData = async () => {
        try {
            const res = await fetch(`${BASE_URL_PRODUCTS}api/products?category=${searchParams.get('category')}`);
            const response = await res.json();
            console.log(response);
            setCategoryData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [searchParams.get('category')])



    // console.log(props)


    return (
        <div className={styles.product_container}>
            <div style={{ backgroundColor: "var(--tert)" }}>

                <Sidebar category={searchParams.get('category')} />
            </div>
            <span style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
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
                    <Products data={categoryData} />

                </div>
            </span>
        </div>
    )
}

export default ProductPage