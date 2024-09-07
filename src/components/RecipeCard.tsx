import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { MdFavoriteBorder } from "react-icons/md";
// import { MdFavorite } from "react-icons/md";

const RecipeCard = ({
  id,
  title,
  rating,
  recipeImage,
  category,
}: {
  id: string;
  title: string;
  rating: number;
  recipeImage: string;
  category: any;
}) => {
  console.log(category);
  return (
    <div className="bg-white rounded-lg flex-grow flex flex-col border border-grey-200 shadow-xl gap-2 h-fit">
      <img
        src={recipeImage}
        alt=""
        className="h-[148px] w-full object-cover rounded-t-md"
      />
      <div className="flex flex-col  justify-between h-full flex-grow gap-3 px-4 py-2">
        <div className="space-x-2">
            {
              category && (category.map(({categoryName}:{categoryName:string})=>(
                <span className="bg-[#ECECEC] font-medium px-2 py-1 rounded-full text-[12px] text-[#00000099]">{categoryName}</span>
              )))
            }
        </div>
        <span className="flex flex-col justify-center flex-grow gap-1">
          <h3 className=" sm:text-[18px] font-semibold text-[#000000] font-poppins">{title}</h3>
          <RatingStars rating={rating} />
        </span>

        
        <span className="flex justify-between">
          <Link
            to={`/recipes/${id}`}
            className="text-[var(--primary)] underline"
          >
            View Recipe
          </Link>
          <button className="flex items-center justify-center border-2 border-black p-1 rounded-full">
            <MdFavoriteBorder className="text-[18px]" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
