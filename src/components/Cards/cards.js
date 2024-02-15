import React, { useEffect } from 'react'
import styles from './cards.module.css'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Wishlist } from '../../Assets/Icons/Heart.svg'
import { ReactComponent as View } from '../../Assets/Icons/Eye.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cartnew.svg'
import { ReactComponent as Compare } from '../../Assets/Icons/compare.svg'
import { colorCombo } from '../../Data/db'
import { useSearchParams } from 'react-router-dom';

const Cards = (value) => {
    console.log(value)
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(colorCombo[0][searchParams.get('category')])

    }, [searchParams.get('category')])
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.inner_card_container}>

                    <div className={styles.image_container}>
                        <img src={value.value?.product_image_url} alt="" />
                    </div>
                    <div className={styles.details}>
                        <span className={styles.about}>
                            <h5>{value.value.sub_category_name}</h5>
                            <h5>{value?.value.variants1_weight} gm </h5>
                            <h5>₹ {value.value.variants1_mrp_price}</h5>


                        </span>
                        <span className={styles.stars}>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </span>
                    </div>
                    <div className={styles.actions} style={{ backgroundColor: colorCombo[0][searchParams.get('category')] }}>
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