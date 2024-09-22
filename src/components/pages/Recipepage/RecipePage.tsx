import { Outlet } from "react-router-dom";
import Layout from "../../Layout";
import RecipeCard from "../../RecipeCard";
import { useGetAllRecipes } from "../../../../services/RecipeApi";


const RecipePage = () => {

  const {data: recipeData } = useGetAllRecipes()
  console.log(recipeData?.data)

  return (
    <Layout>
      <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        Discover <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-[20px] md:py-[40px]">
        {
          recipeData?.data.map(({_id,title, ratings, recipeImage, category}:{_id:string,title:string, ratings: number, recipeImage: string, category:any})=> (
            <RecipeCard key={_id} id={_id} title={title} rating={ratings} recipeImage={recipeImage} category={category}/>
          ))
        }
      </div>
      <Outlet />
    </Layout>
  );
};

export default RecipePage;