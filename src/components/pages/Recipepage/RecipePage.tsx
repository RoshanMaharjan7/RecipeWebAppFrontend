import { Outlet } from "react-router-dom";
import Layout from "../../Layout";
import RecipeCard from "../../RecipeCard";
import { useGetAllRecipes } from "../../../../services/RecipeApi";


const RecipePage = () => {

  const {data: recipeData } = useGetAllRecipes()

  return (
    <Layout>
      <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        Discover <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 py-[20px] md:py-[40px]">
        {
          recipeData?.data.map(({_id,title, rating, recipeImage}:{_id:string,title:string, rating: string, recipeImage: string})=> (
            <RecipeCard key={_id} id={_id} title={title} rating={Number(rating)} recipeImage={recipeImage}/>
          ))
        }
      </div>
      <Outlet />
    </Layout>
  );
};

export default RecipePage;
