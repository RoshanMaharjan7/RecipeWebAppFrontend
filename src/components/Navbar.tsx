import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-[20px] gap-10">
        <h1 className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-[#fb780e] text-3xl">TasteTreasure</h1>
        <span className="flex justify-evenly flex-grow px-20">
            <NavLink to={'/'} className="text-[20px] font-semibold active:text-[#fb780e]">Home</NavLink>
            <NavLink to={'/recipes'} className="text-[20px] font-semibold">Recipes</NavLink>
            <NavLink to={'/'} className="text-[20px] font-semibold">Category</NavLink>
            <NavLink to={'/'} className="text-[20px] font-semibold">Meal Plan</NavLink>
        </span>

        <span>
          Profile
        </span>
    </nav>
  )
}

export default Navbar