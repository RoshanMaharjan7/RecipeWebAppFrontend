const HomeBanner = () => {
  return (
    <div className="flex h-[79vh] justify-between">
      <div className="w-[50%] flex justify-center flex-col gap-8">
        <h3 className="text-[56px] font-semibold flex flex-col">
          Discover Your New Favourite Dish With Our{" "}
          <span className="text-[#fb780e]">Tasty Recipes</span>
        </h3>

        <p className="text-slate-400">
          Elevate your culinary game with our flavourful recipes, explore a
          world of delicious possibilites today!
        </p>

        <button className="w-fit bg-[#fb780e] px-4 py-3 rounded-full font-medium text-[#F8F8F8]">Explore Recipes</button>
      </div>
      <div className="w-[50%] bg-[url('../HomeImage.jpg')] bg-cover"></div>
    </div>
  );
};

export default HomeBanner;
