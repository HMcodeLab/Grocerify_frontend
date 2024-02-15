import {ReactComponent as Down} from '../../assests/down.svg'

export default function Cancelled(){
    return(<>
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
                </div>
            </div> 

            <div className='flex justify-between items-center px-3 fontmons pt-3 text-[#848484]'>
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                            <div className='text-[20px]'>Cancelled</div>
                            <div className='h-36 w-36 flex justify-center items-center '>
                                <img className='h-fit w-fit' src='/lotion.png'/>
                            </div>
                    </div>
                    <div className='fontgob text-[14px]'>Innis free Face wash 25 gm</div>
                </div>

                
            </div>
        </div>


            <div className='w-full fontmons bg-[#D9D9D9] py-3 pl-3 rounded-b-xl'>
                <button className='text-[#58B310]'>Archieve Order</button>
            </div>
    </>)
}