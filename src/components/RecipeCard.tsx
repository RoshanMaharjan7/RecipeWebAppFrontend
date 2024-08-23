import RatingStars from "./RatingStars";



const RecipeCard = () => {
  return (
    <div className="bg-white rounded-lg flex-grow flex flex-col items-center p-6 border border-gray-200 shadow-md gap-4">
      <img src="../nonVeg.jpg" alt="" className="w-full rounded-md" />
      <span className="w-full text-center space-y-1">
        <h3 className="font-medium text-[18px]">MO:MO</h3>
        <RatingStars rating={4} />
      </span>
      <hr  className=" border border-[#0000004F] w-full"/>
    </div>
  );
};

export default RecipeCard;
