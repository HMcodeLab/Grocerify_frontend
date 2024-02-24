import { ReactComponent as Loc } from '../../assests/location_green.svg'
import { ReactComponent as Phone } from '../../assests/call_green.svg'
import { ReactComponent as Mail } from '../../assests/green_mail.svg'
import { ReactComponent as Linkidin } from '../../assests/green_link.svg'
import { ReactComponent as Facebook } from '../../assests/geen_fb.svg'
import { ReactComponent as Tw } from '../../assests/green_tw.svg'
import { ReactComponent as Time } from '../../assests/green_time.svg'
import { ReactComponent as Insta } from '../../assests/green_insta.svg'
import { ReactComponent as Whatsapp } from '../../assests/Whatsapp.svg'
import Mask from '../../Assets/Icons/Mask.svg'
import WhatsappFooter from '../../Assets/Icons/whatsapp_footer.svg'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (<>
        <div className="h-fit w-full  bg-[#333333] text-white  pt-10 font ">
            <div className='flex justify-between mx-[5vw]'>
                <div className='w-45'><img src='/logo.png' /></div>
                <a href={"whatsapp://send?phone=1234567890&text=Hello%2C%20I%20would%20like%20to%20chat"}>
                    <img src={WhatsappFooter} alt="..." className='w-40 mr-10' />
                </a>
            </div>

            <div className='flex justify-between py-[3vh] mx-[5vw]'>
                <div className="w-48">

                    <div className='pt-2'>Discover endless possibilities with our one-stop shop for all your needs! Explore a world of endless options, where you can find everything you need in one place!</div>
                </div>

                <div className=" space-y-5  ">
                    <div className="flex items-start space-x-2">
                        <Loc className='mt-1 text-[#c7eca9]' />
                        <div className='text-[#FFFFFF] text-[16px] font max-w-60'>
                            ThemesGround ,789 main road anytown,CA 12345 USA
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            +91 7717667030
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            anurag121@gmail.com
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Time className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            Mon-Sat 9:00 am-6:00 pm
                        </div>
                    </div>
                </div>

                <div className=" text-[#FFFFFF] flex flex-col  space-y-4 ">
                    <a className='font' href={'/about'}>About Us</a>
                    <a className='font' href={'/contact_us'}>Contact Us</a>
                    <a className='font' href='/about#teams'>Our Team</a>

                </div>

                <div className="text-[#FFFFFF] flex flex-col  space-y-4">
                    <a href={'/products?category=Electronics'}> Electronics</a>
                    <a className='font' href={'/products?category=Grocery'}> Groceries</a>
                    <a className='font' href={'/products?category=Health and Beauty'}> Health & Beauty</a>
                    <a className='font' href={'/products?category=dairy'}> Dairy </a>
                    <a className='font' href={'/products?category=frozen'}>  Frozen</a>
                    <a className='font' href={'/products?category=poultary'}>  Poultary</a>
                    <a className='font' href={'/stores'}> Stores</a>
                </div>

                <div className="text-[#FFFFFF] flex flex-col   space-y-4 pl-5">

                    <a href={'/privacy_policy'} className='font'>Privacy Policy</a>
                    <a href={'/return_policy'} className='font'>Return Policy</a>
                    <a href={'shipping_policy'} className='font'>Shipping Policy</a>
                    <a href={'/terms'} className='font'>Terms Of Service</a>
                    <a className='font' href={'/faq'}>FAQ</a>
                    <a href={'/account/ctons'} className='font'>Coupons</a>
                    <a href={'/shop_regitotion'} className='flex space-x-2 justify-self-start'>
                        <img src={Mask} alt="" /> <h4>PARTNER WITH US</h4> </a>
                </div>


            </div>

            <div className='flex justify-center space-x-10 mt-2'>
                <a href={'https://www.linkdin.com'}><Linkidin /></a>
                <a href={'https://www.facebook.com'}><Facebook /></a>
                <a href={'https://www.instagram.com'}><Insta /></a>
                <a href={'https://www.twitter.com'}><Tw /></a>
                {/* <Link><Whatsapp /></Link> */}
            </div>

            <div className='flex justify-center text-white items-center h-[70px] bg-[#222222] mt-3 font space-x-1'>
                <div> @ Copy rights are reserved by </div>
                <div className='text-[#58B310]'>Grocerify</div>
            </div>
        </div >
    </>)
}