import { useState } from "react"
import { Link } from "react-router-dom"






export default function AddAddress() {
        const [country, setcountry] = useState()
        const [fullname, setfullname] = useState()
        const [mobilenumber, setmobilenumber] = useState()
        const [pincode, setpincode] = useState()
        const [flat, setflat] = useState()
        const [area, setarea] = useState()
        const [landmark, setlandmark] = useState()
        const [town, settown] = useState()
        const [state, setstate] = useState()
        return (<>
                <div className="flex font-semibold text-[#848484] pl-20 pt-3">
                        <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                        <Link to='/security' className="">Your Addresses &gt;</Link>
                        <div className="text-[#58B310]">Edit Address</div>
                </div>
                <div className="flex justify-center w-full fontmons py-10">
                        <div className="w-[40%] ">
                                <div className="font-bold text-[#848484] text-[32px] my-2 text-center fontgobs" >Add Address</div>
                                <div className="w-full text-[#848484] space-y-5 fontmons">
                                        <label htmlFor="country" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Country</p>
                                                <input type="text" id="country" name="country" value={country} onChange={(e) => setcountry(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="fullname" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Full Name</p>
                                                <input id="fullname" name="fullname" type="text" value={fullname} onChange={(e) => setfullname(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="mobile" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Mobile Number</p>
                                                <input id="mobile" name="mobile" type="text" value={mobilenumber} onChange={(e) => setmobilenumber(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="Pincode" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Pincode</p>
                                                <input id="Pincode" name="Pincode" type="text" value={mobilenumber} onChange={(e) => setmobilenumber(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="flat" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Flat no, House no, Building ,Company </p>
                                                <input id="flat" name="flat" type="text" value={flat} onChange={(e) => setflat(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="Area" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Area , Street , Sector , Village </p>
                                                <input id="Area" name="Area" type="text" value={area} onChange={(e) => setarea(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="Landmark" className="w-full shadow-md py-2 px-4">
                                                <p className="font-semibold">Landmark</p>
                                                <input id="Landmark" name="Landmark" type="text" value={landmark} onChange={(e) => setlandmark(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <div className="flex w-full">
                                                <label htmlFor="town" className="w-full shadow-md py-2 px-4">
                                                        <p className="font-semibold">Town / city </p>
                                                        <input id="town" name="town" type="text" value={town} onChange={(e) => settown(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                                </label>
                                                <label htmlFor="state" className="w-full shadow-md py-2 px-4">
                                                        <p className="font-semibold">State</p>
                                                        <input id="state" name="state" type="text" value={state} onChange={(e) => setstate(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                                </label>
                                        </div>
                                        <div className="flex space-x-1">
                                                <input className="h-5 w-5 accent-[#58B310] text-white" type="checkbox" />
                                                <div>Make this my default browser</div>
                                        </div>
                                        <div className="flex w-full justify-center">
                                                <button className=" px-4 py-1 shadow-lg rounded bg-[#58B310] text-white">Save</button>

                                        </div>
                                </div>
                        </div>
                </div>
        </>)
}