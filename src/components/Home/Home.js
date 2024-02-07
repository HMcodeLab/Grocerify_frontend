import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import MainContent from '../MainContent/maincontent'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home_main}>

            <Sidebar />
            <MainContent />
        </div>
    )
}

export default Home