import {ReactComponent as Down} from '../../assests/down.svg'
import Slider from './slider'

export default function Orders(){
    return (<>
    <div className=''>
    <div className='flex space-x-4 text-[#848484] text-[16px] mt-4'>
            <div>1 order placed in</div>
            <select className='bg-[#F3F3F3] outline-none px-2'>
                <option>Past 1 months</option>
                <option>Past 3 months</option>
                <option>Past 6 months</option>
            </select>
        </div>

        <div className='w-full text-[15px] border rounded-t-xl mt-3'>
            <div className="flex justify-between fontmons bg-[#D9D9D9] pt-4 rounded-t-xl px-3 text-[#848484]">
                <div className="flex space-x-40">
                    <div className="flex flex-col">
                        <div className="">Order placed</div>
                        <div className="">1 Feburary 2024</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">Total</div>
                        <div className="">$ 500</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">Ship To</div>
                        <div className="">Davinder</div>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div>Order #16273536</div>
                    <div className="flex space-x-5">
                        <div>View Order Details</div>
                        <div className='flex items-center'>Inovoice <Down className='ml-1'/></div>
                    </div>
                </div>
            </div> 

            <div className='flex justify-between items-center px-3 fontmons pt-3 text-[#848484]'>
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                            <div className='text-[20px]'>Arriving Today</div>
                            <div className='text-[14px]'>Not Yet Dispatched</div>
                            <div className='h-36 w-36 flex justify-center items-center '>
                                <img className='h-fit w-fit' src='/lotion.png'/>
                            </div>
                    </div>
                    <div className='fontgob text-[14px]'>Innis free Face wash 25 gm</div>
                </div>

                <div className='flex flex-col space-y-10'>
                    <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Track Order</button>
                    <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Edit Order</button>
                </div>
            </div>
        </div>


            <div className='w-full fontmons bg-[#D9D9D9] py-3 pl-3 rounded-b-xl'>
                <button className='text-[#58B310]'>Archieve Order</button>
            </div>
        <div className='w-full text-[15px] border rounded-t-xl mt-3'>
            <div className="flex justify-between fontmons bg-[#D9D9D9] pt-4 rounded-t-xl px-3 text-[#848484]">
                <div className="flex space-x-40">
                    <div className="flex flex-col">
                        <div className="">Order placed</div>
                        <div className="">1 Feburary 2024</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">Total</div>
                        <div className="">$ 500</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">Ship To</div>
                        <div className="">Davinder</div>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div>Order #16273536</div>
                    <div className="flex space-x-5">
                        <div>View Order Details</div>
                        <div className='flex items-center'>Inovoice <Down className='ml-1'/></div>
                    </div>
                </div>
            </div> 

            <div className='flex justify-between items-center px-3 fontmons pt-3 text-[#848484]'>
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                            <div className='text-[20px]'>Arriving Today</div>
                            <div className='text-[14px]'>Not Yet Dispatched</div>
                            <div className='h-36 w-36 flex justify-center items-center '>
                                <img className='h-fit w-fit' src='/bowl.png'/>
                            </div>
                    </div>
                    <div className='flex flex-col pt-3'>
                        <div className='fontgob text-[14px]'>Innis free Face wash 25 gm</div>
                        <div className='flex mt-5 space-x-10'>
                            <button className='bg-[#D9D9D9] px-2 py-[2px] rounded text-black font-semibold fontmons'>Buy Again</button>
                            <button className='bg-[#D9D9D9] px-2 py-[2px] rounded text-black font-semibold fontmons'>View Orders</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Get Support</button>
                    <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Seller Feedback</button>
                    <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Write Review</button>
                </div>
            </div>
        </div>

            <div className='w-full fontmons bg-[#D9D9D9] py-3 pl-3 rounded-b-xl'>
                <button className='text-[#58B310]'>Archieve Order</button>
            </div>
        
    </div>
    </>)
}