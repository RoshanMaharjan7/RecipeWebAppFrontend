import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { MdFavoriteBorder } from "react-icons/md";
// import { MdFavorite } from "react-icons/md";

const RecipeCard = ({title, rating }:{title:string, rating: number}) => {
  return (
    <div className="bg-white rounded-lg flex-grow flex items-center p-4 border border-gray-200 shadow-md gap-4">
      <img src="../nonVeg.jpg" alt="" className="w-[45%] rounded-md" />
      <div className="flex flex-col  justify-between h-full flex-grow gap-2">
        <span className="flex flex-col justify-center flex-grow gap-1">
        <h3 className="font-medium text-[16px]">{title}</h3>
        <RatingStars rating={rating} />
        </span>
        
        <hr className="border-1.5"/>
        <span className="flex justify-between">
          <button className="flex items-center justify-center border-2 border-black p-1 rounded-full"><MdFavoriteBorder className="text-[18px]"/></button>
          <Link to='/recipes' className="font-righteous border-2 border-[#00B412] text-[#00B412] bg-[#DEEEDF] flex items-center justify-center px-2 py-1 text-[12px] rounded-[16px] font-medium h-fit hover:bg-[#00B412] hover:text-white transition-all ease-linear">View Recipe</Link>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
