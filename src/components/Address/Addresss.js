import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

export default function Addresses() {
    return (<>
        <div className="w-full flex justify-center fontmons mb-5">
            <div className="w-[90%]">
                <div className="flex mt-3">
                    <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                    <div className="text-[#58B310]">Your Addresses</div>
                </div>
                <div className="text-[#222222] text-[32px] mt-4">Your Addresses</div>
                <div className="flex justify-between mt-5">
                    <Link to='/add' className="w-72 h-52 rounded-2xl border border-[#D9D9D9] shadow-md  flex justify-center items-center text-[#848484] text-[20px]">
                        <div className="flex flex-col text-center">
                            <div className="flex justify-center">  <FaPlus /></div>
                            <div>Add Address</div>
                        </div>
                    </Link>
                    <div className="w-72 h-52 rounded-2xl shadow-md border border-[#D9D9D9] text-[#848484] text-[20px]">
                        <div className="flex flex-col text-[14px]">
                            <div className="border-b-[2px] text-[14px] pl-2 py-1">Default</div>
                            <div className="pl-4 pt-3">
                                <div>Davinder Kumar</div>
                                <div>3/11 Durga Niwas , Sector 12 Chandigarh , Punjab 123457 INDIA</div>
                                <div>Ph No : 878534753762</div>
                                <div className="flex space-x-1 text-[#58B310] font-[500px] mt-3 pb-3">
                                    <Link to='/account/addresses/edit_address'>Edit</Link>
                                    <span>|</span>
                                    <button>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 h-52 rounded-2xl border border-[#D9D9D9] shadow-md  flex justify-center items-center text-[#848484] text-[20px]">
                        <div className="flex flex-col text-[14px] pl-4 ">
                            <div>Davinder Kumar</div>
                            <div>3/11 Durga Niwas , Sector 12 Chandigarh , Punjab 123457 INDIA</div>
                            <div>Ph No : 878534753762</div>
                            <div className="flex space-x-1 text-[#58B310] font-[500px] mt-3">
                                <Link to='/account/addresses/edit_address'>Edit</Link>
                                <span>|</span>
                                <button>Remove</button>
                                <span>|</span>
                                <button>Set as Default</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 h-52 rounded-2xl border border-[#D9D9D9] shadow-md  flex justify-center items-center text-[#848484] text-[20px]">
                        <div className="flex flex-col text-[14px] pl-4 ">
                            <div>Davinder Kumar</div>
                            <div>3/11 Durga Niwas , Sector 12 Chandigarh , Punjab 123457 INDIA</div>
                            <div>Ph No : 878534753762</div>
                            <div className="flex space-x-1 text-[#58B310] font-[500px] mt-3">
                                <Link to='/account/addresses/edit_address'>Edit</Link>
                                <span>|</span>
                                <button>Remove</button>
                                <span>|</span>
                                <button>Set as Default</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}