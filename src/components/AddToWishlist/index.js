import './addtowishlist.css'
import { ReactComponent as Share } from '../../Assets/Icons/share.svg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg'

export default function AddToWishlist() {
    const [items, setitems] = useState([
        { id: 0, quantity: 1, disable: 'hidden' },
        { id: 1, quantity: 1, disable: 'hidden' },
        { id: 2, quantity: 1, disable: 'hidden' },
    ])

    // It is used to apply operation on decreasing the quantity of items
    function NegativeButtonhandle(id) {
        if (items[id].quantity == 1) {
            temp[id].disable = 'hidden'
        }
        else {
            temp[id].disable = ""

            var temp = [...items];

            temp[id].quantity -= 1;

            setitems([...temp])
        }
    }
    // It is used to apply operation on increasing the quantity of items

    function PositiveButtonhandle(id) {

        var temp = [...items];
        temp[id].disable = ""
        temp[id].quantity += 1;
        setitems([...temp])
    }
    return (<>
        <div className="w-full px-20 text-[#848484] space-y-4 py-5">
            <div className="text-[24px] fontcart">My Wishlist (3 Items)</div>
            <div className='h-[2px] w-full bg-[#848484] '></div>
            <div className='flex justify-center '>
                <div className="w-[70%] space-y-5 ">
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5]'>
                        <div>
                            <img src='/beauty1.png' />
                        </div>
                        <div className='flex flex-col w-full space-y-2 py-3'>
                            <div className='flex justify-between pr-5 font-bold fontcart text-[18px]'>
                                <div>Hairloom tomato</div>
                                <div className='flex space-x-5 items-center '>
                                    <button className=''><Share /></button>
                                    <button className=''><Delete /></button>
                                </div>

                            </div>
                            <div className='flex items-center   w-fit'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <div className='text-[#426B1F] fontcart text-[14px] mt-3 flex justify-between pr-2 items-center'>
                                <div>₹{500 * items[0]?.quantity}</div>
                                <div className='flex space-x-3 font2'>
                                    <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>In Stock</button>
                                    <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>Add To Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex rounded-lg w-full border bg-[#FAFAF5]'>
                        <div>
                            <img src='/beauty1.png' />
                        </div>
                        <div className='flex flex-col w-full space-y-2 py-3'>
                            <div className='flex justify-between pr-5 font-bold fontcart text-[18px]'>
                                <div>Hairloom tomato</div>
                                <div className='flex space-x-5 items-center '>
                                    <button className=''><Share /></button>
                                    <button><Delete /></button>
                                </div>

                            </div>
                            <div className='flex items-center   w-fit'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <div className='text-[#426B1F] fontcart text-[14px] mt-3 flex justify-between pr-2 items-center'>
                                <div>₹{500 * items[0]?.quantity}</div>
                                <div className='flex space-x-3 font2'>
                                    <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>In Stock</button>
                                    <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>Add To Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='flex rounded-lg w-full border bg-[#FAFAF5]'>
                        <div>
                            <img src='/beauty1.png' />
                        </div>
                        <div className='flex flex-col w-full space-y-2 py-3'>
                            <div className='flex justify-between pr-5 font-bold fontcart text-[18px]'>
                                <div>Hairloom tomato</div>
                                <div className='flex space-x-5 items-center '>
                                    <button className=''><Share /></button>
                                    <button><Delete /></button>
                                </div>

                            </div>
                            <div className='flex items-center   w-fit'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <div className='text-[#426B1F] fontcart text-[14px] mt-3 flex justify-between pr-2 items-center'>
                                <div>₹{500 * items[0]?.quantity}</div>
                                <div className='flex space-x-3 font2'>
                                    <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>In Stock</button>
                                    <button className='bg-white px-3 py-1 text-[16px] shadow-lg'>Add To Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>

            </div>
        </div>

    </>)
}