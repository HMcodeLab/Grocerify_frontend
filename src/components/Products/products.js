import React from 'react'
import Cards from '../Cards/cards'
import styles from './products.module.css'

const Products = (data) => {
    console.log(data.data)
    return (
        <>
            <div className={styles.products_main}>
                {
                    data?.data?.map((val, ind) => {
                        return (
                            <div key={ind}>
                                <Cards value={val} />
                            </div>

                        )

                    })
                }
            </div>
        </>
    )
}

export default Products