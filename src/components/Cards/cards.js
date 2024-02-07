import React from 'react'
import styles from './cards.module.css'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Wishlist } from '../../Assets/Icons/Heart.svg'
import { ReactComponent as View } from '../../Assets/Icons/Eye.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cartnew.svg'
import { ReactComponent as Compare } from '../../Assets/Icons/compare.svg'

const Cards = (value) => {
    // console.log(value)
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.inner_card_container}>

                    <div className={styles.image_container}>
                        <img src={value.value?.image} alt="" />
                    </div>
                    <div className={styles.details}>
                        <span>
                            <h5>{value.value.name}</h5>
                            <h5>{value?.value.weight}</h5>
                            <h5>{value.value.cost}</h5>


                        </span>
                        <span>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </span>
                    </div>
                    <div className={styles.actions}>
                        <Wishlist />
                        <View />
                        <Cart />
                        <Compare />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards