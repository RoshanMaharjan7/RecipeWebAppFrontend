import Layout from '../../Layout'
import { useParams } from 'react-router-dom'
import { useGetCategoryById } from '../../../../services/RecipeApi'
import RecipeCard from '../../RecipeCard'

const Category = () => {
    const {id} = useParams()

    const {data: categoryData} = useGetCategoryById(id||"")

  return (
    <Layout>
        <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        {categoryData?.data.categoryTitle} <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-[20px] md:py-[40px]">
        {
          categoryData?.data.recipes.map(({_id,title, rating, recipeImage, category}:{_id:string,title:string, rating: string, recipeImage: string, category: any})=> (
            <RecipeCard key={_id} id={_id} title={title} rating={Number(rating)} recipeImage={recipeImage} category={category}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Category