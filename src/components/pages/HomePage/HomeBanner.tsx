const HomeBanner = () => {
  return (
    <div className="flex h-fit lg:h-[79vh] justify-between py-[20px] md:py-0">
      <div className="lg:w-[50%] flex justify-center flex-col gap-8">
        <h3 className="text-[40px] md:text-[48px] lg:text-[56px] font-semibold flex flex-col">
          Discover Your New Favourite Dish With Our{" "}
          <span className="text-[#fb780e]">Tasty Recipes</span>
        </h3>

        <p className="text-slate-400">
          Elevate your culinary game with our flavourful recipes, explore a
          world of delicious possibilites today!
        </p>

        <button className="w-fit bg-[#fb780e] px-4 py-3 rounded-full font-medium text-[#F8F8F8]">Explore Recipes</button>
      </div>
      <div className="hidden lg:block w-[50%] bg-[url('../HomeImage.jpg')] bg-cover"></div>
    </div>
  );
};

export default HomeBanner;
