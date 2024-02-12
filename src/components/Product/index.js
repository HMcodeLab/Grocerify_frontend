import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Down } from '../../Assets/Icons/down.svg'
import { ReactComponent as Box } from '../../Assets/Icons/chatbox.svg'
import { ReactComponent as Emptystar } from '../../Assets/Icons/emptystar.svg'
import { FaPlus } from "react-icons/fa6";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './product.css'
import { useState } from 'react'
import Extra from '../Extra';
export default function Product() {
    const [image, setimage] = useState('mobile.png')
    const [show, setshow] = useState('h-28')
    const [reportshow, setreportshow] = useState('hidden')
    const [reportValue, setreportValue] = useState('')
    const [showdelivery, setshowdelivery] = useState('hidden')
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

    return (<>
        <Extra />
        {/* <div className=''>
        <div>
        <Splide 
         options={ {
            type:"loop",
            height:'30%',
            perPage:1,
            pagination:true,
            perMove:1,
            wheel:false,
            autoplay:false,
            pauseOnHover:false,
            arrows:true,
          } }
        aria-label="My Favorite Images">
                <SplideSlide >
                <div className='flex justify-center items-center'>
                 <img className=' ' src='/logo192.png'/>
                </div>

  </SplideSlide>
  <SplideSlide >
            <div className='flex justify-center items-center'>
                <img className=' ' src='/apple.png'/>
                </div>
  </SplideSlide>
</Splide>
        </div>
    </div> */}

        <div className="flex  pb-5  justify-center px-16">
            <div className="w-1/2    ">
                <div className="flex  border-r-2 border-b-2 py-5 pr-4 h-[519px]">
                    <div className=" w-1/4 space-y-3">
                        <button onClick={() => setimage('mobile.png')} className="w-32 h-24 flex justify-center items-center bg-[#f3f3f3]">
                            <img src="/mobile1.png" />
                        </button>
                        <button onClick={() => setimage('mobilebig2.png')} className="w-32 h-24 flex justify-center items-center bg-[#f3f3f3]">
                            <img src="/mobile2.png" />
                        </button>
                        <button onClick={() => setimage('mobilebig1.png')} className="w-32 h-24 flex justify-center items-center bg-[#f3f3f3]">
                            <img src="/mobile3.png" />
                        </button>
                        <button onClick={() => setimage('mobilebig3.png')} className="w-32 h-24 flex justify-center items-center bg-[#f3f3f3]">
                            <img src="/mobile4.png" />
                        </button>
                    </div>
                    <div className="w-3/4  bg-[#f3f3f3] flex justify-center items-center max-h-full ">
                        <img className="max-h-full" src={image} />
                    </div>
                </div>

                <div className='text-[#848484] text-[20px] space-y-2 mt-2 fontmont'>
                    <div className='text-[#848484] text-[20px]'>
                        Apple iPhone 14 Pro Max (1 TB) - Space Black
                    </div>
                    <div className="flex space-x-2">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <div >
                        ₹1,89,900
                    </div>
                    <div className='text-[14px] '>
                        incl. of taxes (Also includes all applicable duties)
                    </div>
                    <div className='flex w-full justify-between '>
                        <button className='bg-[#58B310] px-4 py-1 rounded text-white text-[16px]'>Add To Cart</button>
                        <button className='bg-[#58B310] px-4 py-1 rounded text-white text-[16px]'>Buy Now</button>
                    </div>
                </div>

                <div className='border-t-2 pt-3 mt-4 space-y-2 fontmont'>
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

                <div className='w-[85%] fontmont text-[#848484] space-y-1 mt-5'>
                    <div className='flex justify-between'>
                        <div>Brand</div>
                        <div>Apple</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Model</div>
                        <div>iPhone 7</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Network Service Provider</div>
                        <div>Unlocked For All Carriers</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Operating System</div>
                        <div>iOS</div>
                    </div>
                    <div className='flex justify-between'>
                        <div>Cellular Technology</div>
                        <div>5G</div>
                    </div>
                </div>

                <div className='fontmont text-[#848484] mt-4 py-2 border-t-2'>
                    <div className='font-semibold'>About this item</div>
                    <ul className={`pl-8 space-y-1  overflow-y-hidden ${show}`} >
                        <li className="list-disc">15.49 cm (6.1 inch) Super Retina XDR Display</li>
                        <li className="list-disc">12MP + 12MP | 12MP Front Camera</li>
                        <li className="list-disc">A14 Bionic Chip with Next Generation Neural Engine Processor</li>
                        <li className="list-disc">12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording</li>
                        <li className="list-disc">All Screen OLED Display</li>
                    </ul>
                    <button className='flex items-center space-x-1' onClick={Showmore}>
                        <Down />
                        <div className='font-semibold'>Show more</div>
                    </button>

                </div>

                <div className='flex items-center space-x-1 mt-4 cursor-pointer' onClick={() => setreportshow('')}>
                    <Box />
                    <div className='text-[#58B310]' >Reporting an issue with this product</div>
                </div>

                <div className={`flex items-center pl-4 mt-2  ${reportshow}`}>
                    <input value={reportValue} onChange={(e) => setreportValue(e.target.value)} className='w-[45%] py-1  border-1 border-[#c6f79b] outline-none rounded-r-lg focus-within:border-[#abeb74] focus-within:shadow-lg pl-1' />
                    <button onClick={() => console.log(reportValue)} className='bg-[#58B310] text-white h-full relative right-16 rounded-r-lg px-2 py-1 '>Report</button>
                </div>

                <div onClick={ShowDeliveryContent} className='flex w-full justify-between py-4 border-t-2 mt-4 fontmont  text-[#848484] text-[16px] cursor-pointer'>
                    <div>Delivery & Returns</div>
                    <Down />
                </div>

                <div className={`fontmont text-[#848484] pl-5 ${showdelivery}`}>
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

                <div className='flex w-full justify-between py-4  border-t-2 fontmont  text-[#848484] text-[16px]'>
                    <div>Reviews</div>
                    <div className='flex'>
                        <Emptystar />
                        <Emptystar />
                        <Emptystar />
                        <Emptystar />
                        <Emptystar />
                    </div>
                </div>

                <div className='flex mt-2 w-full '>
                    <div className='flex flex-col'>
                        <div className='flex w-[170px] justify-between   '>
                            <div className='w-20 h-16 border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                            <div className='w-20 h-16 border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                        </div>
                        <div className='flex w-[170px] justify-between  items-center  mt-2'>
                            <div className='w-20 h-16 border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                            <div className='w-20 h-16 flex justify-center items-center bg-gray-400' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><FaPlus /></div>
                        </div>
                    </div>

                    <div className='w-full ml-3 fontmont'>
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

                        <div className='text-center mt-2'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…”</div>
                    </div>
                </div>

                <div className='mt-3 fontmont '>
                    <textarea placeholder='Write a review...' className='w-full h-60 pl-1 border outline-none resize-none' aria-expanded={false}></textarea>
                    <div className='w-full flex justify-end relative bottom-10 '><button className='bg-[#58B310] rounded text-white px-2 py-1'>Submit</button></div>
                </div>
            </div>
            <div className='w-1/2 pl-8 pt-4'>
                <div className='text-[#848484] text-[20px] fontgo'>Nearest Stores</div>
                <div className='w-full space-y-5'>
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                        <div className=' flex items-center justify-center relative'>
                            <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                <div className='text-[10px]'>20%</div>
                                <div className='text-[8px]'>off</div>
                            </div>
                            <img className='h-full w-full ' src='/target.png' />

                        </div>
                        <div className='flex flex-col w-full fontmont text-[#848484]'>
                            <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                <div>The Target</div>
                                <div className='flex '>
                                    <div>₹2000</div>
                                    <div className='txtc text-[10px]'>₹3000</div>
                                </div>
                            </div>
                            <div>Sector 22C , Chandigarh (Electronics)</div>
                            <div>Delivery by Sun, 12 Feb</div>
                            <div>2.1km</div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[14px] text-[#58B310] font-semibold'>Open now  - 11noon - 9:30pm</div>
                                <button>Buy Now</button>

                            </div>
                        </div>
                    </div>

                    <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                        <div className=' flex items-center justify-center relative'>
                            <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                <div className='text-[10px]'>20%</div>
                                <div className='text-[8px]'>off</div>
                            </div>
                            <img className='h-full w-full ' src='/target.png' />

                        </div>
                        <div className='flex flex-col w-full fontmont text-[#848484]'>
                            <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                <div>The Target</div>
                                <div className='flex '>
                                    <div>₹2000</div>
                                    <div className='txtc text-[10px]'>₹3000</div>
                                </div>
                            </div>
                            <div>Sector 22C , Chandigarh (Electronics)</div>
                            <div>Delivery by Sun, 12 Feb</div>
                            <div>2.1km</div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[14px] text-[#58B310] font-semibold'>Open now  - 11noon - 9:30pm</div>
                                <button>Buy Now</button>

                            </div>
                        </div>
                    </div>
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                        <div className=' flex items-center justify-center relative'>
                            <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                <div className='text-[10px]'>20%</div>
                                <div className='text-[8px]'>off</div>
                            </div>
                            <img className='h-full w-full ' src='/target.png' />

                        </div>
                        <div className='flex flex-col w-full fontmont text-[#848484]'>
                            <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                <div>The Target</div>
                                <div className='flex '>
                                    <div>₹2000</div>
                                    <div className='txtc text-[10px]'>₹3000</div>
                                </div>
                            </div>
                            <div>Sector 22C , Chandigarh (Electronics)</div>
                            <div>Delivery by Sun, 12 Feb</div>
                            <div>2.1km</div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[14px] text-[#58B310] font-semibold'>Open now  - 11noon - 9:30pm</div>
                                <button>Buy Now</button>

                            </div>
                        </div>
                    </div>
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                        <div className=' flex items-center justify-center relative'>
                            <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                <div className='text-[10px]'>20%</div>
                                <div className='text-[8px]'>off</div>
                            </div>
                            <img className='h-full w-full ' src='/target.png' />

                        </div>
                        <div className='flex flex-col w-full fontmont text-[#848484]'>
                            <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                <div>The Target</div>
                                <div className='flex '>
                                    <div>₹2000</div>
                                    <div className='txtc text-[10px]'>₹3000</div>
                                </div>
                            </div>
                            <div>Sector 22C , Chandigarh (Electronics)</div>
                            <div>Delivery by Sun, 12 Feb</div>
                            <div>2.1km</div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[14px] text-[#58B310] font-semibold'>Open now  - 11noon - 9:30pm</div>
                                <button>Buy Now</button>

                            </div>
                        </div>
                    </div>
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                        <div className=' flex items-center justify-center relative'>
                            <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                <div className='text-[10px]'>20%</div>
                                <div className='text-[8px]'>off</div>
                            </div>
                            <img className='h-full w-full ' src='/target.png' />

                        </div>
                        <div className='flex flex-col w-full fontmont text-[#848484]'>
                            <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                <div>The Target</div>
                                <div className='flex '>
                                    <div>₹2000</div>
                                    <div className='txtc text-[10px]'>₹3000</div>
                                </div>
                            </div>
                            <div>Sector 22C , Chandigarh (Electronics)</div>
                            <div>Delivery by Sun, 12 Feb</div>
                            <div>2.1km</div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[14px] text-[#58B310] font-semibold'>Open now  - 11noon - 9:30pm</div>
                                <button>Buy Now</button>

                            </div>
                        </div>
                    </div>
                    <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4'>
                        <div className=' flex items-center justify-center relative'>
                            <div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                <div className='text-[10px]'>20%</div>
                                <div className='text-[8px]'>off</div>
                            </div>
                            <img className='h-full w-full ' src='/target.png' />

                        </div>
                        <div className='flex flex-col w-full fontmont text-[#848484]'>
                            <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                <div>The Target</div>
                                <div className='flex '>
                                    <div>₹2000</div>
                                    <div className='txtc text-[10px]'>₹3000</div>
                                </div>
                            </div>
                            <div>Sector 22C , Chandigarh (Electronics)</div>
                            <div>Delivery by Sun, 12 Feb</div>
                            <div>2.1km</div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[14px] text-[#58B310] font-semibold'>Open now  - 11noon - 9:30pm</div>
                                <button>Buy Now</button>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </>)
}