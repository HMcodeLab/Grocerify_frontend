import './addtowishlist.css'
import { ReactComponent as Share } from '../../Assets/Icons/share.svg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg'
import { ReactComponent as Empty } from '../../Assets/Icons/emptystar.svg'
import { BASE_URL_PRODUCTS } from '../../Api/api';
import { Globalinfo } from '../../App';
import Spinner from '../Spinner';
import { RWebShare } from 'react-web-share';

export default function AddToWishlist() {
    const [Data, setData] = useState([])
    const [Subtotal, setSubtotal] = useState(0)
    const [show, setshow] = useState(false)
    const { TotalCount, count, setcount, TotalWishCount } = useContext(Globalinfo)

    useEffect(() => {
        setshow(true)
        async function Fetchdata() {
            let url = BASE_URL_PRODUCTS + 'api/getwishlist?mobile=1234567890'
            const data = await fetch(url)
            const response = await data.json()
            console.log(response)
            setData(response.wishlist)
            // setitems([...Data])
        }
        Fetchdata()
        TotalCount()
        TotalWishCount()
        setshow(false)
    }, [])
    // It is used to apply operation on decreasing the quantity of items

    function StarPrint(count) {
        let con = []
        for (let index = 0; index < count; index++) {
            con.push(<span><Star /></span>)
        }
        for (let index = 0; index < 5 - count; index++) {
            con.push(<span className=''><Empty className='h-[20px] w-[20px]' /></span>)
        }
        return con;
    }
    async function Addtocart(id) {
        setshow(true)
        let url = BASE_URL_PRODUCTS + 'api/addtocart'
        let bodydata = { mobile: 1234567890, productid: id }
        const data = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata)
        });

        RemoveFromCart(id)
        TotalCount()
        TotalWishCount()
        setshow(false)
    }

    async function RemoveFromCart(id) {
        setshow(true)
        let url2 = BASE_URL_PRODUCTS + 'api/removefromwishlist'
        let bodydata2 = { mobile: 1234567890, productid: id }

        const data2 = await fetch(url2, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata2)
        });
        const response = await data2.json()
        setData(response.data)
        TotalCount()
        TotalWishCount()
        setshow(false)
    }
    return (<>
        <div className="w-full px-20 text-[#848484] space-y-4 py-5">
            <div className="text-[24px] fontcart">My Wishlist ({Data.length} Items)</div>
            <div className='h-[2px] w-full bg-[#848484] '></div>
            <div className='flex justify-center '>
                <div className="w-[70%] space-y-5 ">
                    {
                        Data.map((item) => {
                            let price = item.product.variants1_mrp_price - (item.product.variants1_mrp_price * (item.product["variants1_discount%"] / 100))
                            let starcount = item.product.rating;

                            return (<>
                                <div className='flex rounded-lg w-full border bg-[#FAFAF5] space-x-3 pl-2 items-center '>
                                    <div className='w-28 h-28  flex justify-center items-center '>
                                        <img className='max-h-full max-w-full mix-blend-multiply' src={item.product.product_image_url} />
                                    </div>
                                    <div className='flex flex-col w-full space-y-2 py-3'>
                                        <div className='flex justify-between pr-5 font-bold font2 text-[18px]'>
                                            <div>{item.product.products_title}</div>
                                            <div className='flex space-x-5 items-center '>
                                                <RWebShare
                                                    data={{
                                                        text: "Web Share - Grocerify",
                                                        url: "https://www.linkedin.com/in/davinder--kumar/",
                                                        title: "Grocerify",
                                                    }}
                                                    onClick={() =>
                                                        console.log("shared successfully!")
                                                    }
                                                >
                                                    <button className=''><Share /> </button>
                                                    {/* <button>Share on Web</button> */}
                                                </RWebShare>
                                                <button className='' onClick={() => RemoveFromCart(item.product._id)}><Delete /></button>
                                            </div>

                                        </div>
                                        <div className='flex items-center   w-fit'>
                                            {
                                                StarPrint(starcount)
                                            }

                                        </div>
                                        <div className='text-[#426B1F] fontcart text-[14px] mt-3 flex justify-between pr-2 items-center'>
                                            <div>₹{price}</div>
                                            <div className='flex space-x-3 font2'>
                                                <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>In Stock</button>
                                                <button className='bg-white px-3 py-1 text-[16px] shadow-lg' onClick={() => Addtocart(item.product._id)}>Add To Cart</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>)
                        })
                    }






                </div>

            </div>
            {show ? <div className='w-full h-screen fixed -top-4 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
        </div>

    </>)
}