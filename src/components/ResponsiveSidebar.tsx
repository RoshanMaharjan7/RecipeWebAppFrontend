import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";

const ResponsiveSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <HiMenuAlt3 className="text-[24px] lg:hidden" />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 right-0 h-screen w-screen bg-black backdrop-blur opacity-60 z-40 transform ${
          open ? "" : "hidden"
        } transition-transform duration-500 ease-out`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-[260px]  sm:w-[300px] bg-[#F8F8F8] border z-50 transform ${
          open ? "-translate-x-0" : "translate-x-full"
        } transition-transform ${
          open ? "duration-500" : "duration-300"
        } ease-in-out`}
      >
        <IoClose
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3   text-[28px]"
        />
        <div className="flex flex-col h-full px-[20px] py-[80px] gap-10">
          <Avatar />
          <SearchBar className="" />
          <span className="flex flex-col max-w-[45rem] h-fit gap-4 ">
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                return isActive ? { color: "#fb780e", fontWeight: "600" } : {};
              }}
              className="text-[18px] font-medium  "
            >
              Home
            </NavLink>
            <NavLink
              to={"/recipes"}
              style={({ isActive }) => {
                return isActive ? { color: "#fb780e", fontWeight: "600" } : {};
              }}
              className="text-[18px] font-medium"
            >
              Recipes
            </NavLink>

            <NavLink
              to={"/meal-plan"}
              style={({ isActive }) => {
                return isActive ? { color: "#fb780e", fontWeight: "600" } : {};
              }}
              className="text-[18px] font-medium"
            >
              Meal Plan
            </NavLink>

            <NavLink
              to={"/contactus"}
              style={({ isActive }) => {
                return isActive ? { color: "#fb780e", fontWeight: "600" } : {};
              }}
              className="text-[18px] font-medium"
            >
              Contact Us
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSidebar;
