import { useGetAllCategory } from "../../../../services/RecipeApi"
import CategoryCard from "../../CategoryCard"

const Categories = () => {

  const {data: categoryData} = useGetAllCategory()
  return (
    <div className="py-[40px] space-y-8">
        <h2 className="text-[24px] md:text-[1.8rem]">Recipe <span className="text-[#fb780e]">Category</span></h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {
            categoryData?.data.map((category:any)=>(
              <CategoryCard key={category._id} categoryData={category}/>
            ))
          }
        </div>
    </div>
  )
}

export default Categories