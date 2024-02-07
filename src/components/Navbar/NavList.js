import React from 'react'
import styles from './Navlist.module.css'

const NavList = () => {
    return (
        <div className={styles.nav_list_main}>

            <ul className={styles.nav_list}>
                <li>Home</li>
                <li>Electronics</li>
                <li>Groceries</li>
                <li>Health & Beauty</li>
                <li>Dairy</li>
                <li>Frozen</li>
                <li>Poultary</li>
                <li>Today's offer</li>
            </ul>

        </div>
    )
}

export default NavList