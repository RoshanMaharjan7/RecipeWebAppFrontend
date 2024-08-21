import { TbMail } from "react-icons/tb";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white px-[120px]">
      <div className="flex justify-between flex-wrap py-[1.5rem]">
        <div className="flex flex-col gap-3 max-w-[300px]">
          <h3 className="text-[#fb780e] text-[1.5rem]">TasteTreasure</h3>
          <span className="text-slate-400 text-[14px] space-y-2">
            <p>Discover Your New Favourite Dish With Our
            Tasty Recipes</p>
            <p>
            Elevate your culinary game with our flavourful recipes, explore a world of delicious possibilites today!
            </p>
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[#fb780e] text-[1.2rem]">Contact Us</h3>
          <span className="text-slate-400 text-[14px] space-y-2">
          <p className="flex items-center gap-2"><TbMail className="text-[16px]"/>tastetreasure@gmail.com</p>
          <p className="flex items-center gap-2"><MdOutlinePhoneEnabled className="text-[16px]"/>+977 9841309804</p>
          <p className="flex items-center gap-2"><GoQuestion className="text-[16px]"/> FAQs?</p>
          </span>
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="text-[#fb780e] text-[1.2rem]">Connect with Us</h3>
          <span className="text-slate-400 text-[14px] space-y-2">
          <Link to='/' className="flex items-center gap-2"><CiFacebook className="text-[16px]"/>Facebook</Link>
          <Link to='/' className="flex items-center gap-2"><IoLogoInstagram className="text-[16px]"/>Instagram</Link>
          <Link to='/' className="flex items-center gap-2"><FaXTwitter className="text-[16px]"/>Twitter</Link>
          </span>
        </div>

      </div>
      <hr className="border-2 "/>
      <p className="text-center font-medium text-[18px] py-[1rem]">
      &#169; {new Date().getFullYear()} TasteTreasure All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer