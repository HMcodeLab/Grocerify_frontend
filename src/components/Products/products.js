import React from 'react'
import Cards from '../Cards/cards'
import styles from './products.module.css'
import { Link } from 'react-router-dom'

const Products = (data) => {
    console.log(data.data)
    return (
        <>
            <div className={styles.products_main}>
                {
                    data?.data?.map((val, ind) => {
                        return (
                            <Link to={'/product/new'}> <div key={ind}>
                                <Cards value={val} />
                            </div>
                            </Link>

                        )

                    })
                }
            </div>
        </>
    )
}

export default Products