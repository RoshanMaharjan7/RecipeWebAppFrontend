import { TfiSearch } from "react-icons/tfi";

const Headbar = () => {
  return (
    <div className="flex justify-between items-center py-[20px]">
      <h2 className="font-righteous text-[20px]  sm:text-[24px]">
        Learn, Cook & Eat Your Food
      </h2>
      <span className="relative max-w-[300px] flex-grow hidden lg:block">
        <input
          type="text"
          placeholder="Search Recipe"
          className="w-full border border-black rounded-md py-2 px-3 pr-14 placeholder:font-light text-[14px]"
        />
        <TfiSearch className="absolute top-2.5 right-4 text-[20px]"/>
      </span>
    </div>
  );
};

export default Headbar;
