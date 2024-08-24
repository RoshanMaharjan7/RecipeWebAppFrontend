import CategoryCard from "../../CategoryCard"

const Categories = () => {
  return (
    <div className="py-[80px] space-y-10">
        <h2 className="text-[1.8rem]">Recipe <span className="text-[#fb780e]">Category</span></h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
        </div>
    </div>
  )
}

export default Categories