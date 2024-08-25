import SearchBar from "./SearchBar";

const Headbar = () => {
  return (
    <div className="flex justify-between items-center py-[8px] sm:py-[20px]">
      <h2 className="font-righteous text-[20px]  sm:text-[24px]">
        Learn, Cook & Eat Your Food
      </h2>
      <SearchBar className="hidden lg:block flex-grow" />
    </div>
  );
};

export default Headbar;
