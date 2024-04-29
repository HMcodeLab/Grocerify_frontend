import { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ReactComponent as Loc } from '../../assests/location_green.svg'
import { ReactComponent as Pay } from '../../assests/pay.svg'
import { ReactComponent as Order } from '../../assests/order.svg'
import { FaPlus } from "react-icons/fa6";
import './checkout.css'
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import CircularProgress from '@mui/joy/CircularProgress';
import { useSearchParams } from 'react-router-dom';



export default function Checkout() {
    const navigate = useNavigate()
    const [searchparams, setSearchParams] = useSearchParams();
    const jsonString = (searchparams.get('item'));
    // const parsedString = (jsonString)
    // console.log(jsonString)

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)

    const [checkoutData, setCheckoutData] = useState([]);

    const [selectedAddress, setSelectedAddress] = useState(0);
    const [btnLoader, setbtnLoader] = useState(false)
    const [subtotal, setsubtotal] = useState()
    const [originalPrice, setOriginalPrice] = useState(0)

    const [totalitems, settotalitems] = useState()
    const [paymentType, setpaymentType] = useState();
    // console.log(cartData[0]?.quantity)


    useEffect(() => {
        let temp = localStorage.getItem('CHECKOUT_DATA');
        temp = JSON.parse(temp);
        console.log(temp)

        setCheckoutData(temp)

    }, [localStorage.getItem('CHECKOUT_DATA')])



    useEffect(() => {

        async function OrderSummery() {


            try {
                const final = checkoutData;
                // console.log(final)
                let subttotal_amount = 0
                let total_items = 0
                let original_price = 0;


                final?.forEach((item) => {
                    console.log(item)

                    let price = item.price - (item.price * (item.discount / 100));
                    subttotal_amount += price;

                    original_price += item.price;


                })

                console.log(subttotal_amount)
                setOriginalPrice(original_price)
                setsubtotal(subttotal_amount)
                settotalitems(total_items)
            } catch (error) {
                console.log(error)


            }

        }


        OrderSummery()
    }, [checkoutData])


    const handleChangepayment = (e) => {
        console.log(e.target.name)
        setpaymentType(e.target.name)
    }

    const createOrder = async (val) => {
        let temp2 = [];
        console.log(val)
        val.forEach((val) => {
            temp2.push({ productid: val.productid, quantity: val.quantity, shopid: val.shopid });
        })
        // console.log("value", val)
        console.log(temp2)
        setbtnLoader(true)
        try {
            const res = await axios.post(`${BASE_URL}api/order`,
                {
                    "discount_coupon": {
                        "coupon_code": "NEW-100",
                        "discount_price": 50,
                    },

                    shipping_address: userDetail.address[selectedAddress],
                    products: [...temp2]

                }, {
                headers: {
                    'Authorization': ` Bearer ${localStorage.getItem('GROC_USER_TOKEN')}`
                }
            })
            // console.log(res)
            setbtnLoader(false)
            toast.success("Order Placed Successfully");
            navigate('/success')
        } catch (error) {
            setbtnLoader(false)
            toast.error("An Error Occured");
        }
    }

    const handleOrder = async () => {

        if (paymentType === 'cod') {
            createOrder(checkoutData);
        }
        else {
            loadRazorpay()
        }
    }
    const loadRazorpay = () => {
        if (!paymentType) {
            toast.error("Select Payment Type");
        } else {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                const options = {
                    // key: 'rzp_test_ovrL1ExhTWhDv2',
                    key: 'rzp_test_jmLsdK6FoWIRSe',
                    amount: subtotal * 100, // Amount in paisa
                    currency: 'INR',
                    name: 'Hoping minds',
                    description: 'Product description',
                    image: '',
                    handler: function (response) {
                        createOrder(checkoutData)
                        // router.push('/profile?tab=booking-history')
                        // Handle success
                        // alert(response.razorpay_payment_id);
                    },
                    prefill: {
                        name: 'Customer Name',
                        email: 'customer@example.com',
                        contact: '8283929792'
                    },
                    theme: {
                        color: '#3399cc'
                    }
                };
                const rzp = new window.Razorpay(options);
                rzp.open();
            };
        }
    };


    const handleChangeAddress = (e) => {
        console.log(e.target.name)
        setSelectedAddress(Number(e.target.name))

    }

    return (<>
        <div className='w-[89%] mx-auto mb-4 checkoutfont1 text-[#848484] pt-3'>
            <div className='text-[32px]'>Delivery Address</div>
            <div className="flex flex-col w-[90%] mt-3 pb-3 ">
                <div className='shadow-lg px-4 space-y-8 py-4 rounded '>
                    <div className="flex items-center space-x-1 ">
                        <Loc />
                        <span className='text-[#58B310]'>Your Address</span>
                    </div>

                    <div className='flex flex-col pl-6 space-y-3'>

                        {userDetail?.address.map((val, ind) => {
                            return (
                                <label htmlFor='address1' className='space-x-2' key={ind}>
                                    <input className='accent-[#58B310]' type='radio' name={ind} id='address1' onChange={handleChangeAddress} checked={selectedAddress === Number(ind)} />
                                    <span className='cursor-pointer'>{val.full_name} , {val?.mobile} , {val?.zip} , {val?.address_line_1} , {val?.address_line_2} , {val.landmark},{val.city},{val?.state} </span>
                                </label>
                            )
                        })}

                    </div>

                    <div className='space-y-2'>
                        <Link to='/account/addresses/add_address' className='text-[#58B310]'>+ Add New Address</Link>
                        <div className='bg-[#58B310] w-[55%] h-[2px]'></div>
                    </div>

                </div>

                <div className='text-[32px] mt-5'>Payment Method</div>
                <div className='shadow-lg px-4 space-y-8 py-4 rounded mt-4'>
                    <div className="flex items-center space-x-1 ">
                        <Pay />
                        <span className='text-[#58B310]'>Select payment method</span>
                    </div>

                    <div className='flex flex-col pl-6 space-y-4'>
                        <label htmlFor='credit' className='space-x-2'>
                            <input className='accent-[#58B310]' type='radio' name='credit' id='credit' checked={paymentType === "credit"} onChange={handleChangepayment} />
                            <span className='cursor-pointer'>Credit / Debit card</span>
                        </label>
                        <label htmlFor='upi' className='space-x-2'>
                            <input className='accent-[#58B310]' type='radio' name='upi' id='upi' checked={paymentType === "upi"} onChange={handleChangepayment} />
                            <span className='cursor-pointer'>UPI</span>
                        </label>
                        <label htmlFor='netbanking' className='space-x-2'>
                            <input className='accent-[#58B310]' type='radio' name='netbanking' id='netbanking' checked={paymentType === "netbanking"} onChange={handleChangepayment} />
                            <span className='cursor-pointer'>Net Banking</span>
                        </label>
                        <label htmlFor='cod' className='space-x-2'>
                            <input className='accent-[#58B310]' type='radio' name='cod' id='cod' checked={paymentType === "cod"} onChange={handleChangepayment} />
                            <span className='cursor-pointer'>Cash On Delivery</span>
                        </label>
                        <label htmlFor='emi' className='space-x-2'>
                            <input className='accent-[#58B310]' type='radio' name='emi' id='emi' checked={paymentType === "emi"} onChange={handleChangepayment} />
                            <span className='cursor-pointer'>EMI</span>
                        </label>
                    </div>
                </div>


                <div className='text-[32px] mt-5'>Order Summary</div>
                <div className='shadow-lg px-4 space-y-8 py-4 rounded mt-4'>
                    <div className="flex items-center space-x-1 ">
                        <Order />
                        <span className='text-[#58B310]'>Order Details</span>
                    </div>

                    <div className='flex flex-col pl-6 space-y-4'>
                        <div className='flex justify-between'>
                            <span>Price</span>
                            <span className='font-[550px]'> Rs . {originalPrice} </span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Delivery</span>
                            <span className='font-[550px]'>Free</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Discount Price</span>
                            <span className='font-[550px]'>Rs .{originalPrice - subtotal}</span>
                        </div>
                        <div className='bg-[#58B310] h-[2px]'></div>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <span>Total Amount</span>
                                <span className='text-[10px] text-[#E70000] font-[500px]'>incl all GST</span>
                            </div>
                            <span className='font-[550px]'>Rs . {subtotal}</span>
                        </div>
                    </div>
                </div>

                <button className='my-10 flex fontorder bg-[#426B1F] text-white items-center w-full  rounded-lg justify-around h-10 font-semibold '>
                    <div onClick={handleOrder}>
                        {btnLoader ? <CircularProgress size="sm" color="success" /> : (paymentType === 'cod' ? "Place Order" : "Continue to payments")}

                    </div>

                </button>

            </div>
        </div>
        <Toaster />
    </>)
}