import { Link } from "react-router-dom";

const CategoryCard = ({categoryData}:any) => {
  const {_id,categoryTitle, categoryImage, recipes } = categoryData
  return (
    <div className="max-h-[152.9px] min-w-[300px] relative bg-white flex-grow p-4 rounded-xl flex gap-4 font-righteous border border-gray-200 shadow-md overflow-hidden">
      <img src={categoryImage} className="w-[180px] rounded-full absolute -top-4 -left-[78px] sm:-left-10" />
      <div className="flex flex-col justify-center gap-3 pl-[100px] sm:pl-[140px] flex-grow">
        <h4 className="text-[20px]">{categoryTitle} Recipes</h4>
        <p className="text-[#636363] text-[12px] font-medium ">
          Explore {categoryTitle} Recipes and Learn, Cook $ Eat your {categoryTitle} Food
        </p>
        <span className="flex justify-between items-center">
          <p className="text-[#636363] text-[12px] font-medium ">{recipes.length}+ Recipes</p>
          <Link  to={`/category/${_id}`} className="border-[#00B412] border-2 rounded-full text-[#00B412] text-[12px] px-3 py-1 bg-[#DEEEDF] hover:bg-[#00B412] hover:text-white transition-all">
            View Recipes
          </Link>
        </span>
      </div>
    </div>
  );
};


export default CategoryCard;
