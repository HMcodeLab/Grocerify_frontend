import './addtocart.css'
import { ReactComponent as Arrow } from '../../Assets/Icons/arrow.svg'
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';
export default function Addtocart() {
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
    function DeleteItem() {
        console.log("delete")
    }
    return (<>
        <div className="w-full px-14 text-[#848484] space-y-4 py-5">
            <div className="text-[24px] fontcart">YOUR CART (3 Items)</div>
            <div className='h-[2px] w-full bg-[#848484] '></div>
            <div className='flex justify-between '>
                <div className="leftside w-3/5    space-y-5">
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5]'>
                        <div>
                            <img src='/beauty1.png' />
                        </div>
                        <div className='flex flex-col w-full '>
                            <div className='flex justify-between pr-5 font-bold fontcart text-[16px]'>
                                <div>Hairloom tomato</div>
                                <div >₹{500 * items[0]?.quantity}</div>
                            </div>
                            <div className='text-[#426B1F] fontcart text-[14px] mt-2'>₹{500 * items[0]?.quantity}</div>
                            <div className='flex justify-between pr-5  items-center mt-4'>
                                <div className='flex  items-center space-x-2  w-fit'>
                                    <button value="minus" onClick={() => NegativeButtonhandle(0)} className={`flex items-center ${items[0]?.disable}`}><FaMinus /></button>
                                    <div className='min-w-7 min-h-6 bg-white border border-[rgb(175,175,175)] text-center'>{items[0]?.quantity}</div>
                                    <button name="plus" onClick={() => PositiveButtonhandle(0)}><FaPlus /></button>
                                </div>
                                <button onClick={DeleteItem}><Delete /></button>
                            </div>
                        </div>
                    </div>

                    <div className='flex rounded-lg w-full border bg-[#FAFAF5]'>
                        <div>
                            <img src='/beauty1.png' />
                        </div>
                        <div className='flex flex-col w-full '>
                            <div className='flex justify-between pr-5 font-bold fontcart text-[16px]'>
                                <div>Hairloom tomato</div>
                                <div >₹{500 * items[1]?.quantity}</div>
                            </div>
                            <div className='text-[#426B1F] fontcart text-[14px] mt-2'>₹{500 * items[1]?.quantity}</div>
                            <div className='flex justify-between pr-5  items-center mt-4'>
                                <div className='flex  items-center space-x-2  w-fit'>
                                    <button value="minus" onClick={() => NegativeButtonhandle(1)} className={`flex items-center ${items[1]?.disable}`}><FaMinus /></button>
                                    <div className='min-w-7 min-h-6 bg-white border border-[rgb(175,175,175)] text-center'>{items[1]?.quantity}</div>
                                    <button name="plus" onClick={() => PositiveButtonhandle(1)}><FaPlus /></button>
                                </div>
                                <button onClick={DeleteItem}><Delete /></button>
                            </div>
                        </div>
                    </div>

                    <div className='flex rounded-lg w-full border bg-[#FAFAF5]'>
                        <div>
                            <img src='/beauty1.png' />
                        </div>
                        <div className='flex flex-col w-full '>
                            <div className='flex justify-between pr-5 font-bold fontcart text-[16px]'>
                                <div>Hairloom tomato</div>
                                <div >₹{500 * items[2]?.quantity}</div>
                            </div>
                            <div className='text-[#426B1F] fontcart text-[14px] mt-2'>₹{500 * items[2]?.quantity}</div>
                            <div className='flex justify-between pr-5  items-center mt-4'>
                                <div className='flex  items-center space-x-2  w-fit'>
                                    <button value="minus" onClick={() => NegativeButtonhandle(2)} className={`flex items-center ${items[2]?.disable}`}><FaMinus /></button>
                                    <div className='min-w-7 min-h-6 bg-white border border-[rgb(175,175,175)] text-center'>{items[2]?.quantity}</div>
                                    <button name="plus" onClick={() => PositiveButtonhandle(2)}><FaPlus /></button>
                                </div>
                                <button onClick={DeleteItem}><Delete /></button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='ordersummery w-[30%] bg-[#FAFAF5] rounded-lg border px-4 space-y-3 py-4 h-fit'>
                    <div className='fontcart font-bold'>Order Summery</div>
                    <div className='flex justify-between fontorder'>
                        <div>Subtotal</div>
                        <div>₹{500 * items[0]?.quantity + 500 * items[1]?.quantity + 500 * items[2]?.quantity}</div>
                    </div>
                    <div className='flex justify-between fontorder'>
                        <div>Shopping</div>
                        <div>₹{500 * items[0]?.quantity + 500 * items[1]?.quantity + 500 * items[2]?.quantity}</div>
                    </div>
                    <div className='flex justify-between fontorder'>
                        <div>Tax</div>
                        <div>₹0</div>
                    </div>
                    <div className='flex justify-between fontorder'>
                        <div>Cupon code</div>
                        <div>F5SFDI65</div>
                    </div>
                    <div className='flex justify-between fontorder'>
                        <div>Delivery charges</div>
                        <div className='flex space-x-1'>
                            <div className='txt'>₹40</div>
                            <div>Free</div>
                        </div>
                    </div>
                    <div className='flex justify-between fontorder font-bold'>
                        <div>Total</div>
                        <div>₹{500 * items[0]?.quantity + 500 * items[1]?.quantity + 500 * items[2]?.quantity}</div>
                    </div>
                    <button className=' flex fontorder bg-[#426B1F] text-white items-center w-full  rounded-lg justify-around h-10 font-semibold '>
                        <div>
                            Continue to payments
                        </div>
                        <Arrow />
                    </button>
                </div>
            </div>
        </div>

    </>)
}