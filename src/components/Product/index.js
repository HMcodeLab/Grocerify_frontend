import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Down } from '../../Assets/Icons/down.svg'
import { ReactComponent as Box } from '../../Assets/Icons/chatbox.svg'
import { ReactComponent as Emptystar } from '../../Assets/Icons/emptystar.svg'
import { FaPlus } from "react-icons/fa6";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './product.css'
import { useEffect, useRef, useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL } from '../../Api/api';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Globalinfo } from '../../App';
import ProductImages from '../ProductImages/productCarousel';
import axios from 'axios';


export default function Product() {
    const navigate = useNavigate();

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails, checkoutData, setCheckoutData } = useContext(Globalinfo)
    const params = useParams();

    const [image, setimage] = useState('/mobile.png')
    const [show, setshow] = useState('h-23')
    const [reportshow, setreportshow] = useState('hidden')
    const [reportValue, setreportValue] = useState('')
    const [showdelivery, setshowdelivery] = useState('hidden')
    const [Data, setData] = useState([])
    const [actualprice, setactualprice] = useState()
    const [images, setimages] = useState([])
    const [video, setvideo] = useState([])
    const [store, setstore] = useState([])
    // const [showvideo, setshowvideo] = useState(false)

    const primaryRef = useRef(null);
    const secondaryRef = useRef(null);

    const slug = params.slug;
    let price = 0;
    useEffect(() => {
        async function Fetchdata() {
            try {
                let url = BASE_URL + 'api/product/' + slug
                const data = await axios.get(url)
                const response = data.data;
                console.log(response)

                price = response[0].stores[0].variants1_mrp_price - (response[0]?.stores[0]?.variants1_mrp_price * (response[0].stores[0]?.variants1_discount_per / 100))
                setstore(response[0].stores)
                setactualprice(price)
                setimage(response[0].product_primary_image_url)
                setData(response[0])
                setimages(response[0].product_images_url)
                // console.log(response[0].product_videos_url[0])
                setvideo(response[0].product_videos_url[0])
                if (primaryRef.current) {
                    // @ts-ignore
                    primaryRef.current.sync(secondaryRef.current.splide);
                }
            } catch (error) {
                console.log(error)
            }
        }

        Fetchdata()
    }, [primaryRef.current, secondaryRef.current])

    function Showmore() {
        // console.log('hello')
        setshow('h-auto')
    }
    function ShowDeliveryContent() {
        if (showdelivery == 'hidden') {
            setshowdelivery('')
        }
        else {
            setshowdelivery('hidden')
        }
    }

    async function addToCart(storeid) {

        if (localStorage.getItem('GROC_USER_TOKEN')) {
            let id = Data._id;
            try {
                let url = BASE_URL + 'api/addtocart'
                let bodydata = { mobile: userDetail?.mobile, productid: id, quantity: 1, shopID: storeid }
                const data = await fetch(url, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bodydata)
                });
                GetCart()
                toast.success('Added To Cart')
            } catch (error) {
                console.log(error)
                toast.error('Error Adding To Cart');
            }
        }
        else {
            navigate('/login')
        }




    }

    const handleBuy = async (storeid) => {
        console.log(Data)
        let temp = [];
        temp.push({ productid: Data._id, price: Data.stores[0].variants1_mrp_price, discount: Data.stores[0].variants1_discount_per, quantity: 1, shopid: storeid })

        console.log(temp)
        localStorage.setItem('CHECKOUT_DATA', JSON.stringify(temp))
        navigate('/checkout');
    }


    // console.log(Data)

    return (<>
        {/* <Extra /> */}

        <div className="flex  pb-5  justify-center px-16">
            <div className="">
                {/* image */}
                <div className='flex w-full sm:flex-col'>
                    <div className='w-[55%]   sm:w-full '>
                        <div className="flex  border-r-2 border-b-2 py-5 pr-4 sm:px-4  ">
                            <ProductImages
                                data={Data?.product_images_url?.map(
                                    (val) => val
                                )}

                            />

                        </div>
                        {/* title */}
                        <div className='text-[#848484] text-[20px] space-y-2 mt-2 sm:px-4 fontmont'>
                            <div className='text-[#848484] text-[20px]'>
                                {
                                    Data.products_title
                                }
                            </div>
                            <div className="flex space-x-2">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>


                        </div>
                        {/* custom */}
                        <div className='border-t-2 pt-3 mt-4 sm:px-4 space-y-2 fontmont'>
                            <div className='text-[#848484] text-[16px] '>Colour - Midnight Grey</div>
                            <div className='flex space-x-3'>
                                <button className='h-5 w-5 bg-black rounded-full'></button>
                                <button className='h-5 w-5 bg-[#FEE4FF] rounded-full'></button>
                                <button className='h-5 w-5 bg-[#F9EDCE] rounded-full'></button>
                                <button className='h-5 w-5 bg-[#E70000] rounded-full'></button>
                            </div>
                            <div className='flex space-x-8 mt-4 text-[#848484]'>
                                <div>Size : </div>
                                <div className='flex space-x-4 text-[#848484]'>
                                    <button className='bg-[#f3f3f3] px-2 rounded'>512 GB</button>
                                    <button className='bg-[#f3f3f3] px-2 rounded'>258 GB</button>
                                    <button className='bg-[#f3f3f3] px-2 rounded'>128 GB</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[45%] pl-8 pt-4 sm:px-4 sm:w-full'>
                        <div className='text-[#848484] text-[20px] fontgo'>Nearest Stores</div>
                        <div className='w-full space-y-5 overflow-y-scroll'>

                            {
                                store.length > 0 && store.map((item) => {
                                    // console.log(item)
                                    return (<>
                                        <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                                            <div className=' flex items-center justify-center relative'>
                                                <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                                    <div className='text-[10px]'>{item?.
                                                        variants1_discount_per}%</div>
                                                    <div className='text-[8px]'>off</div>
                                                </div>
                                                <img className='max-h-52 max-w-32' src={item.shop_primary_image_url} />

                                            </div>
                                            <div className='flex flex-col w-full fontmont text-[#848484]'>
                                                <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                                    <div>{item.shopName}</div>
                                                    <div className='flex '>
                                                        <div>₹2000</div>
                                                        <div className='txtc text-[10px]'>₹3000</div>
                                                    </div>
                                                </div>
                                                <div>{item.ShopAddress}</div>
                                                <div>Delivery by Sun, 12 Feb</div>
                                                <div>2.1km</div>
                                                <div className='flex justify-between items-center'>
                                                    <div className='text-[14px] text-[#58B310] font-semibold'>Open now  -pm</div>
                                                    <div className='flex gap-3'>
                                                        <button className='border border-[var(--primary)] rounded-sm px-3 py-1' onClick={() => addToCart(item.store)}>Add To Cart</button>
                                                        <button className='border border-[var(--primary)] px-3 py-1' onClick={() => handleBuy(item?.store)}>Buy Now</button>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                })

                            }

                        </div>

                    </div>
                </div>
                {/* Add Here */}

                <div className='w-[55%] sm:w-full'>
                    <div className=' fontmont text-[#848484] space-y-1 mt-5 sm:px-4'>
                        <div className='flex justify-between'>
                            <div>Brand</div>
                            <div className='text-end'>Apple</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Model</div>
                            <div className='text-end'>iPhone 7</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Network Service Provider</div>
                            <div className='text-end'>Unlocked For All Carriers</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Operating System</div>
                            <div className='text-end'>iOS</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Cellular Technology</div>
                            <div className='text-end'>5G</div>
                        </div>
                    </div>

                    <div className='fontmont text-[#848484] mt-4 py-2 sm:px-4 border-t-2'>
                        <div className='font-semibold'>About this item</div>
                        <ul className={`pl-8 space-y-1  overflow-y-hidden ${show}`} >
                            <li className="list-disc"> {
                                Data.products_description
                            }</li>

                        </ul>
                        {show === "h-23" && (Data.products_description?.length > 100) &&
                            <button className='flex items-center space-x-1' onClick={Showmore}>
                                <Down />
                                <div className='font-semibold'>Show more</div>
                            </button>
                        }

                    </div>


                    <div onClick={ShowDeliveryContent} className='flex w-full justify-between py-4 border-t-2 mt-4 fontmont  text-[#848484] text-[16px] cursor-pointer  sm:px-4'>
                        <div>Delivery & Returns</div>
                        <Down />
                    </div>

                    <div className={`fontmont text-[#848484] pl-5  sm:px-4 ${showdelivery}`}>
                        <div className='font-semibold'>This product will delivered to you</div>
                        <ul className='pl-8'>
                            <li className='list-disc'>By 22 Feburary</li>
                        </ul>
                        <div>
                            <div className='font-semibold'>This product is not refundable</div>
                            <ul className='pl-8'>
                                <li className='list-disc'>Only replaceable</li>
                                <li className='list-disc'>Not refundable</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex w-full justify-between py-4  border-t-2 fontmont  text-[#848484] text-[16px]  sm:px-4'>
                        <div>Reviews</div>
                        <div className='flex'>
                            <Emptystar />
                            <Emptystar />
                            <Emptystar />
                            <Emptystar />
                            <Emptystar />
                        </div>
                    </div>

                    <div className='flex justify-between mt-2 w-full  sm:px-4 '>
                        <div className='flex flex-col gap-2 w-[40%]'>
                            <div className='flex w-full justify-between   '>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                            </div>
                            <div className='flex w-full justify-between  items-center  mt-2'>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>

                            </div>
                        </div>

                        <div className=' fontmont w-[55%]'>
                            <div className='flex justify-between'>
                                <div className='flex space-x-3 items-center'>
                                    <div className='rounded-full h-8 w-8 border bg-slate-400 flex justify-center items-center'>
                                        <img src='/logo192.png' />
                                    </div>
                                    <div>Davinder Kumar</div>
                                </div>
                                <div className='flex '>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className='text-center mt-2 text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…”</div>
                        </div>
                    </div>
                </div>


            </div>

            {/* PickThis *************************************************************************************************************************** */}

        </div>
        <Toaster />
    </>)
}