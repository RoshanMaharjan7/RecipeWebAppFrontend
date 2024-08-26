import { Link, NavLink } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-[20px] gap-10">
      <h1 className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-[#fb780e] text-[24px] sm:text-3xl">
        TasteTreasure
      </h1>
      <span className="hidden lg:flex justify-evenly flex-grow  xl:max-w-[40rem] ">
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

      

      <span className="flex items-center">
        <Link to='/recipes/add' className="bg-[#fb780e] text-[#F8F8F8] px-3 py-1.5 rounded-md font-medium mr-5 hidden lg:block">Add Recipe</Link>
        <Avatar className="hidden lg:flex" />
        <ResponsiveSidebar />
      </span>
    </nav>
  );
};

export default Navbar;
