import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-[20px] gap-10">
      <h1 className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-[#fb780e] text-[24px] sm:text-3xl">
        TasteTreasure
      </h1>
      <span className="hidden lg:flex justify-evenly flex-grow px-20 max-w-[45rem] ">
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
          to={"/jfkd"}
          style={({ isActive }) => {
            return isActive ? { color: "#fb780e", fontWeight: "600" } : {};
          }}
          className="text-[18px] font-medium"
        >
          Category
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
      </span>

      <span>Profile</span>
    </nav>
  );
};

export default Navbar;
