import { ReactComponent as Loc } from '../../Assets/Icons/location_white.svg'
import { ReactComponent as Phone } from '../../Assets/Icons/phone_white.svg'
import { ReactComponent as Mail } from '../../Assets/Icons/email_white.svg'
import { ReactComponent as Linkidin } from '../../Assets/Icons/linkdin.svg'
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook_white.svg'
import { ReactComponent as Tw } from '../../Assets/Icons/tw.svg'
import { ReactComponent as Insta } from '../../Assets/Icons/insta.svg'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (<>
        <div className="h-fit w-full  bg-[#333333]   pt-5">
            <div className='flex justify-around'>
                <div className=" space-y-5 ">
                    <div className='text-[24px] text-[#FFFFFF] contact'>CONTACT US</div>
                    <div className="flex items-start space-x-2">
                        <Loc className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            ThemesGround ,789 main road anytown,CA 12345 USA
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            +91 8283929792
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            davinder@gmail.com
                        </div>
                    </div>
                </div>

                <div className=" text-[#FFFFFF] flex flex-col  space-y-3">
                    <div className='contact text-[24px]'>CUSTOMER SERVICE</div>
                    <Link className='font'>Payments</Link>
                    <Link className='font'>Shipping</Link>
                    <Link className='font'>Cancellation & Returns</Link>
                    <Link className='font'>FAQ</Link>

                </div>

                <div className="text-[#FFFFFF] flex flex-col  space-y-3">
                    <div className='contact text-[24px]'>HELP</div>
                    <Link className='font'>Payments</Link>
                    <Link className='font'>Shipping</Link>
                    <Link className='font'>Cancellation & Returns</Link>
                    <Link className='font'>FAQ</Link>
                </div>
            </div>

            <div className='flex justify-center space-x-10 mt-16'>
                <Link><Linkidin /></Link>
                <Link><Facebook /></Link>
                <Link><Insta /></Link>
                <Link><Tw /></Link>
            </div>

            <div className='flex justify-center text-white items-center h-[70px] bg-[#222222] mt-3 font'>
                @ Copy rights are reserved by Grocerify
            </div>
        </div>
    </>)
}