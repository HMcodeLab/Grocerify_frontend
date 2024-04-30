import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../../Api/api"
import Spinner from "../Spinner"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function AddAddress() {
        const [country, setcountry] = useState()
        const [full_name, setfull_name] = useState()
        const [mobile, setmobile] = useState()
        const [zip, setzip] = useState()
        const [address_line_1, setaddress_line_1] = useState()
        const [address_line_2, setaddress_line_2] = useState()
        const [landmark, setlandmark] = useState()
        const [city, setcity] = useState()
        const [state, setstate] = useState()
        const [make_default, setmake_default] = useState(false)
        const [show, setshow] = useState(false)
        const navigate = useNavigate()
        async function Addaddress() {
                setshow(true)
                try {
                        if (!full_name || !mobile || !country || !zip || !address_line_1 || !address_line_2 || !landmark || !city || !state) {
                                toast.warn('Every input must be filled', {
                                        position: "top-center",
                                        autoClose: 1000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                        // transition: 'Bounce'
                                });
                        }
                        else {

                                let temp = localStorage.getItem('GROC_USER_TOKEN')


                                // console.log(temp)

                                let url = `${BASE_URL}api/addaddress`
                                let address1 = { address: { full_name, city, state, landmark, address_line_1, address_line_2, country, mobile, zip }, make_default }

                                //     console.log(stringifyObject(address1))
                                const data = await fetch(url, {
                                        method: 'post',
                                        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + temp },
                                        body: JSON.stringify(address1)
                                });
                                let response = await data.json()
                                if (response.success) {
                                        toast.success('Address Saved Successfully', {
                                                position: "top-center",
                                                autoClose: 1000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "colored",
                                                // transition: 'Bounce'
                                        });
                                        navigate(-1)
                                }
                                else {
                                        toast.error('Server error', {
                                                position: "top-center",
                                                autoClose: 1000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "colored",
                                                // transition: 'Bounce'
                                        });
                                }
                        }
                } catch (error) {
                        console.log("dfdsf" + error)
                }

                // RemoveFromCart(id)
                // TotalCount()
                setshow(false)
        }

        return (<>
                <ToastContainer
                        position="top-center"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="colored"
                // transition: Bounce
                />
                <div className="flex font-semibold text-[#848484] pl-20 pt-3">
                        <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                        <Link to='/security' className="">Your Addresses &gt;</Link>
                        <div className="text-[#58B310]">Add Address</div>
                </div>
                <div className="flex justify-center w-full fontmons py-10">
                        <div className="w-[40%] ">
                                <div className="font-bold text-[#848484] text-[32px] my-2 text-center fontgobs" >Add Address</div>
                                <div className="w-full text-[#848484] space-y-5 fontmons">
                                        <label htmlFor="country" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Country</p>
                                                <input required type="text" id="country" name="country" value={country} onChange={(e) => setcountry(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="full_name" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Full Name</p>
                                                <input required id="full_name" name="full_name" type="text" value={full_name} onChange={(e) => setfull_name(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="mobile" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Mobile Number</p>
                                                <input required id="mobile" name="mobile" type="number" value={mobile} onChange={(e) => setmobile(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="zip" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">zip</p>
                                                <input required id="zip" name="zip" type="number" value={zip} onChange={(e) => setzip(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="address_line_1" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">address_line_1 no, House no, Building ,Company </p>
                                                <input required id="address_line_1" name="address_line_1" type="text" value={address_line_1} onChange={(e) => setaddress_line_1(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="address_line_2" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">address_line_2 , Street , Sector , Village </p>
                                                <input required id="address_line_2" name="address_line_2" type="text" value={address_line_2} onChange={(e) => setaddress_line_2(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="Landmark" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Landmark</p>
                                                <input required id="Landmark" name="Landmark" type="text" value={landmark} onChange={(e) => setlandmark(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <div className="flex w-full">
                                                <label htmlFor="city" className="w-full shadow-md py-2 px-4">
                                                        <p className="font-semibold">city / city </p>
                                                        <input required id="city" name="city" type="text" value={city} onChange={(e) => setcity(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                                </label>
                                                <label htmlFor="state" className="w-full shadow-md py-2 px-4">
                                                        <p className="font-semibold">State</p>
                                                        <input required id="state" name="state" type="text" value={state} onChange={(e) => setstate(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                                </label>
                                        </div>
                                        <div className="flex space-x-1">
                                                <input onChange={(e) => setmake_default(e.target.checked)} className="h-5 w-5 accent-[#58B310] text-white" type="checkbox" />
                                                <div>Make this my default browser</div>
                                        </div>
                                        <div className="flex w-full justify-center">
                                                <button onClick={() => Addaddress()} className=" px-4 py-1 shadow-lg rounded bg-[#58B310] text-white">Save</button>

                                        </div>
                                </div>
                        </div>
                        {show ? <div className='w-full h-screen fixed -top-4 left-0 bg-[#b4cca1] opacity-80'>
                                <Spinner className='' />

                        </div> : ''}
                </div>
        </>)
}
