import React, { useState, useEffect } from 'react'
import '@splidejs/react-splide/css';
import styles from './sidebar.module.css'
import { ReactComponent as Hotdeals } from '../../Assets/Icons/hotdeals.svg'
import { ReactComponent as Sort } from '../../Assets/Icons/soryBy.svg'
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { ReactComponent as List } from '../../Assets/Icons/list.svg'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import productimg from '../../Assets/Images/product.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(1);

    return (
        <div className={styles.main_sidebar} style={{ height: "fit-content" }}>
            <div className={styles.categories_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 1 ? setIsDropdownOpen(null) : setIsDropdownOpen(1) }}>
                    <span>

                        <List />
                        <h3>Categories</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen === 1 && <ul key={1}>
                    <li>Clothing</li>
                    <li>Electronics</li>
                    <li>Shoes</li>
                    <li>Health</li>
                    <li>Beauty</li>
                    <li>Kids</li>
                    <li>Sports</li>
                    <li>Home Decor</li>
                </ul>}
            </div>
            <div className={styles.hotdeals_main}>
                <span className={styles.heading}>
                    <span>

                        <Hotdeals />
                        <h3>Hot Deals</h3>
                    </span>


                </span>
                <div style={{ width: "19vw" }}>
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
                            <div className={styles.product_main}>
                                <div className={styles.tag}>New</div>
                                <img src={productimg} alt="" />
                                <div className={styles.details}>
                                    <ul>
                                        <li>Apple</li>
                                        <li>1 kg</li>
                                        <li>₹ 110</li>
                                    </ul>
                                    <span>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </span>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.product_main}>
                                <div className={styles.tag}>New</div>
                                <img src={productimg} alt="" />
                                <div className={styles.details}>
                                    <ul>
                                        <li>Apple</li>
                                        <li>1 kg</li>
                                        <li>₹ 110</li>
                                    </ul>
                                    <span>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </span>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div className={styles.sortBy_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 2 ? setIsDropdownOpen(null) : setIsDropdownOpen(2) }}>
                    <span>

                        <Sort />
                        <h3>Sort By</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen === 2 && <ul key={2}>
                    <li>
                        <input type="radio" name="popularity" id="1" />
                        <p>Popularity</p></li>
                    <li>
                        <input type="radio" name="highToLow" id="2" />
                        <p>Price: Low to High</p></li>
                    <li>
                        <input type="radio" name="lowToHigh" id="3" />
                        <p>Price: High to Low</p></li>
                    <li>
                        <input type="radio" name="discount" id="4" />
                        <p>Discount</p></li>
                    <li>
                        <input type="radio" name="relevence" id="5" />
                        <p>Relevence</p></li>


                </ul>}
            </div>
        </div>
    )
}

export default Sidebar