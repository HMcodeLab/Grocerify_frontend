import React from 'react'
import styles from './Navlist.module.css'
import { Link } from 'react-router-dom'

const NavList = () => {
    return (
        <div className={styles.nav_list_main}>

            <ul className={styles.nav_list}>
                <a href={'/products?category=home'}> <li>Home</li></a>
                <a href={'/products?category=Electronics'}> <li>Electronics</li></a>
                <a href={'/products?category=Grocery'}> <li>Groceries</li></a>
                <a href={'/products?category=Health and Beauty'}> <li>Health & Beauty</li></a>
                <a href={'/products?category=dairy'}> <li>Dairy</li> </a>
                <a href={'/products?category=frozen'}>  <li>Frozen</li></a>
                <a href={'/products?category=poultary'}>  <li>Poultary</li></a>
                <a href={'/products/offers'}>  <li>Today's offer</li></a>
            </ul>

        </div>
    )
}

export default NavList