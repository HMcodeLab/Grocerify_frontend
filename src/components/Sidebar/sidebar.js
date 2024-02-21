import React, { useState, useEffect } from 'react'
import '@splidejs/react-splide/css';
import styles from './sidebar.module.css'
import { ReactComponent as Hotdeals } from '../../Assets/Icons/hotdeals.svg'
import { colorCombo } from '../../Data/db';
import { ReactComponent as Sort } from '../../Assets/Icons/soryBy.svg'
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { ReactComponent as List } from '../../Assets/Icons/list.svg'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import productimg from '../../Assets/Images/product.png'
import tv from '../../Assets/Images/products/tv.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useSearchParams } from 'react-router-dom';

const Sidebar = (category) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(1);
    // console.log(category.category)
    const [searchParams, setSearchParams] = useSearchParams();


    return (
        <div className={styles.main_sidebar} style={{ height: "fit-content" }}>
            <div className={styles.categories_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 1 ? setIsDropdownOpen(null) : setIsDropdownOpen(1) }}>
                    <span>

                        <List />
                        <h3 style={{ textTransform: "capitalize" }}>{category.category || 'categories'}</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen === 1 && <ul key={1}>
                    <a href={'/products?category=Clothing'}> <li>Clothing</li></a>
                    <a href={'/products?category=Electronics'}> <li>Electronics</li></a>
                    <a href={'/products?category=Shoes'}> <li>Shoes</li></a>
                    <a href={'/products?category=Health and Beauty'}> <li>Health</li></a>
                    <a href={'/products?category=Beauty'}> <li>Beauty</li> </a>
                    <a href={'/products?category=Kids'}> <li>Kids</li> </a>
                    <a href={'/products?category=sports'}>  <li>Sports</li></a>
                    <a href={'/products?category=Home Decor'}>  <li>Home Decor</li></a>
                </ul>}
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
            <div className={styles.sortBy_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 3 ? setIsDropdownOpen(null) : setIsDropdownOpen(3) }}>
                    <span>

                        <Sort />
                        <h3>Sort By Distance</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen === 3 && <ul key={2}>
                    <li>
                        <input type="radio" name="popularity" id="1" />
                        <p>Under 1 KM</p></li>
                    <li>
                        <input type="radio" name="highToLow" id="2" />
                        <p>Between 1 - 2 KM</p></li>
                    <li>
                        <input type="radio" name="lowToHigh" id="3" />
                        <p>Between 2 - 3 KM</p></li>
                    <li>
                        <input type="radio" name="discount" id="4" />
                        <p>Under 5 KM</p></li>



                </ul>}
            </div>
            <div className={styles.sortBy_main}>
                <span className={styles.heading} onClick={() => { isDropdownOpen === 3 ? setIsDropdownOpen(null) : setIsDropdownOpen(3) }}>
                    <span>

                        <Sort />
                        <h3>Sort By Ratings</h3>
                    </span>
                    <Dropdown />

                </span>
                {isDropdownOpen === 3 && <ul key={2}>
                    <li>
                        <input type="radio" name="popularity" id="1" />
                        <p>Under 1 KM</p></li>
                    <li>
                        <input type="radio" name="highToLow" id="2" />
                        <p>Between 1 - 2 KM</p></li>
                    <li>
                        <input type="radio" name="lowToHigh" id="3" />
                        <p>Between 2 - 3 KM</p></li>
                    <li>
                        <input type="radio" name="discount" id="4" />
                        <p>Under 5 KM</p></li>



                </ul>}
            </div>
        </div>
    )
}

export default Sidebar