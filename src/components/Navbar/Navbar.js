import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ReactComponent as Loc } from '../../Assets/Icons/location.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import { ReactComponent as User } from '../../Assets/Icons/user.svg'
import { ReactComponent as Search } from '../../Assets/Icons/search.svg'
import logoimg from '../../Assets/Images/logo.png';

const Navbar = () => {
    return (
        <div className={`${styles.nav_main}`}>
            <div className={styles.nav_row}>
                <div className={styles.logo_container}>

                    <a href="/">
                        <img src={logoimg} alt="Logo not found" />
                    </a>
                </div>
                <div className={styles.search}>

                    <div className={styles.search_icon}>
                        <Search />
                    </div>
                    <input type="text" name="search" id="" placeholder='search' />

                </div>
                <div className={styles.location}>
                    <Loc /><p>Delivery to</p><h5>{"chandigarh"}</h5>

                </div>
                <div className={styles.icons}>
                    <span>
                        <Cart />

                    </span>
                    <span>
                        <User />
                        <h5>Sign In</h5>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar