import { Outlet } from "react-router-dom";
import Layout from "../../Layout";
import RecipeCard from "../../RecipeCard";
import Headbar from "../../Headbar";
import { useGetAllRecipes } from "../../../../services/RecipeApi";


const RecipePage = () => {

  const {data: recipeData } = useGetAllRecipes()

  return (
    <Layout>
      <Headbar />
      <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        Discover <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 py-[20px] md:py-[40px]">
        {
          recipeData?.data.map(({title, rating, recipeImage}:{title:string, rating: string, recipeImage: string})=> (
            <RecipeCard title={title} rating={Number(rating)} recipeImage={recipeImage}/>
          ))
        }
      </div>
      <Outlet />
    </Layout>
  );
};

export default RecipePage;
