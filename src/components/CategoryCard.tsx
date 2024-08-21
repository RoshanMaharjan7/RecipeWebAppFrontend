const CategoryCard = () => {
  return (
    <div className="relative bg-white flex-grow p-4 rounded-xl flex gap-4 font-righteous border border-gray-200 shadow-md overflow-hidden">
      <img src="../nonVeg.jpg" className="w-[180px] rounded-full absolute -top-4 -left-10" />
      <div className="flex flex-col justify-center gap-3 pl-[140px]">
        <h4 className="text-[20px]">Non-Veg Recipes</h4>
        <p className="text-[#636363] text-[12px] font-medium ">
          Explore Non-Veg Recipes and Learn, Cook $ Eat your Nonn-Veg Food
        </p>
        <span className="flex justify-between items-center">
          <p className="text-[#636363] text-[12px] font-medium ">30+ Recipes</p>
          <button className="border-[#00B412] border-2 rounded-full text-[#00B412] text-[12px] px-3 py-1 bg-[#DEEEDF] hover:bg-[#00B412] hover:text-white transition-all">
            View Recipes
          </button>
        </span>
      </div>
    </div>
  );
};


export default CategoryCard;
