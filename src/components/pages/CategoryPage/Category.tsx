import React from 'react'
import Layout from '../../Layout'
import Headbar from '../../Headbar'
import { useParams } from 'react-router-dom'
import { useGetCategoryById } from '../../../../services/RecipeApi'
import RecipeCard from '../../RecipeCard'

const Category = () => {
    const {id} = useParams()

    const {data: categoryData} = useGetCategoryById(id||"")

  return (
    <Layout>
        <Headbar/>
        <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        {categoryData?.data.categoryTitle} <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 py-[20px] md:py-[40px]">
        {
          categoryData?.data.recipes.map(({title, rating, recipeImage}:{title:string, rating: string, recipeImage: string})=> (
            <RecipeCard title={title} rating={Number(rating)} recipeImage={recipeImage}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Category