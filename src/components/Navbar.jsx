import { navData } from "../utils/data"
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="">
      {/* upper nav */} 
      <div className="bg-gray-100 font-normal px-5">
      <div className= "max-w-8xl mx-auto flex items-center justify-between  text-gray-950">
        <div>Enjoy free shipping on all orders</div>
        <div className=""><input type="text" className="w-full border-2 border-black m-1 rounded-md select-none outline-none max-w-[500px]" placeholder="search here"/></div>
        <div className="flex-center divide-x-2">
          <a href="/#" className="pr-3">About us</a>
        
          <a href="/#" className="pl-3">Contact us</a>
        </div>
      </div>
      </div>
      {/* lower nav */}
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div><img src="/logo-odyssia.png" alt="" className="h-14"/></div>
        <div className="flex-center gap-5">
          {navData.map((item, id)=>(
            <p key={id} className="text-sm font-semibold font-inter text-black hover:text-gray-500 hover:border-b-4 hover:border-gray-600 p-3 uppercase tracking-wide transition-all ">{item}</p>
          ))} 
        </div>
        <div className="flex-center gap-5 text-xl pr-10">
          <MdFavoriteBorder/>
          <IoCartOutline/>
          <IoPersonOutline/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
