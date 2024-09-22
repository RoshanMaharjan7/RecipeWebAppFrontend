import { Link, NavLink } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar";
import Avatar from "./Avatar";
import { RootState } from "../providers/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetCurrentUser } from "../../services/AuthenticationApi";
import { logout, setUser } from "../providers/UserSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import Cookies from "js-cookie";
import { useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user);
  console.log(userData);
  const dispatch = useDispatch();

  const { data: currentUser, refetch } = useGetCurrentUser();

  useEffect(() => {
    if (currentUser) {
      dispatch(setUser(currentUser.data));
    }
  }, [currentUser, dispatch]);

  const access = userData.role === "admin" || userData.role === "chef";

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    refetch();
  }

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
        {access && (
          <Link
            to="/recipes/add"
            className="bg-[#fb780e] text-[#F8F8F8] px-3 py-1.5 rounded-sm font-medium mr-5 hidden lg:block"
          >
            Add Recipe
          </Link>
        )}

        {userData.fullName === "" ? (
          <Link
            to="/login"
            className="bg-[#fb780e] text-[#F8F8F8] hidden lg:flex px-3 py-1.5 rounded-md font-medium"
          >
            Login
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar
                className="hidden lg:flex"
                username={userData?.fullName}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => navigate('/profile')}><FaUser size={16}/>Profile</DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={handleLogout}><HiOutlineLogout size={18}/>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <ResponsiveSidebar userData={userData} />
      </span>
    </nav>
  );
};

export default Navbar;
