import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginAndSecurity(){
    const [editname, seteditname] = useState(true)
    const [editemail, seteditemail] = useState(true)
    const [editphone, seteditphone] = useState(true)
    const [editpassword, seteditpassword] = useState(true)
    const [name, setname] = useState('Davinder Kumar')
    const [phone, setphone] = useState(8283929792)
    const [email, setemail] = useState('davindergiri@gmail.com')
    const [password, setpassword] = useState('davinder123')
    return(<>
    <div className="flex justify-center w-full fontmons py-10">
        <div className="w-[50%] ">
            <div className="flex font-semibold">
                <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                <div className="text-[#58B310] font-semibold">Login and Security</div>
            </div>
            <div className="font-bold text-[#848484] text-[32px] my-2">Login and Security</div>
            <div className="w-full text-[#848484] space-y-5">
                <label htmlFor="name" className="w-full shadow-md py-2 px-4">
                    <div className="flex justify-between w-full">
                        <p className="font-bold">Name</p>
                        {
                            editname==true?<button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={()=>{seteditname(false)}}>EDIT</button>:<button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={()=>{seteditname(true)}}>SAVE</button>
                        }
                    </div>
                    <input disabled={editname} type="text" id="name" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1"/>
                </label>
                <label htmlFor="email" className="w-full shadow-md py-2 px-4">
                    <div className="flex justify-between w-full">
                        <p className="font-bold">Email</p>
                        {
                            editemail==true?<button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={()=>{seteditemail(false)}}>EDIT</button>:<button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={()=>{seteditemail(true)}}>SAVE</button>
                        }                    
                    </div>
                    <input disabled={editemail} id="email" name="email" type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1"/>
                </label>
                <label htmlFor="phone" className="w-full shadow-md py-2 px-4">
                    <div className="flex justify-between w-full">
                        <p className="font-bold">Primary Phone Number</p>
                        {
                            editphone==true?<button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={()=>{seteditphone(false)}}>EDIT</button>:<button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={()=>{seteditphone(true)}}>SAVE</button>
                        }              
                    </div>
                    <input disabled={editphone} id="phone" name="phone" type="number" value={phone} onChange={(e)=>setphone(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1"/>
                    <p className="text-[11px]">Quickly sign in, easily recover passwords and receive security notifications with this mobile number.</p>
                </label>
                <label className="w-full shadow-md py-2 px-4">
                    <div className="flex justify-between w-full">
                        <p className="font-bold">Password</p>
                        {
                            editpassword==true?<button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={()=>{seteditpassword(false)}}>EDIT</button>:<button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={()=>{seteditpassword(true)}}>SAVE</button>
                        }               
                     </div>
                    <input disabled={editpassword}  type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1 text-[16px]"/>
                </label>
            </div>
        </div>
    </div>
    </>)
}