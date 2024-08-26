import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { MdFavoriteBorder } from "react-icons/md";
// import { MdFavorite } from "react-icons/md";

const RecipeCard = ({id,title, rating, recipeImage }:{id:string,title:string, rating: number, recipeImage: string}) => {
  return (
    <div className="bg-white rounded-lg flex-grow flex items-center p-4 border border-gray-200 shadow-md gap-4 max-h-[152px] sm:max-h-[178px] min-w-[294px]">
      <img src={recipeImage} alt="" className="h-full rounded-md" />
      <div className="flex flex-col  justify-between h-full flex-grow gap-3">
        <span className="flex flex-col justify-center flex-grow gap-1">
        <h3 className="font-medium sm:text-[18px]">{title}</h3>
        <RatingStars rating={rating} />
        </span>
        
        <hr className="border-1.5"/>
        <span className="flex justify-between">
          <button className="flex items-center justify-center border-2 border-black p-1 rounded-full"><MdFavoriteBorder className="text-[18px]"/></button>
          <Link to={`/recipes/${id}`} className="font-righteous border-2 border-[#00B412] text-[#00B412] bg-[#DEEEDF] flex items-center justify-center px-2 py-1 text-[12px] rounded-[16px] font-medium h-fit hover:bg-[#00B412] hover:text-white transition-all">View Recipe</Link>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
