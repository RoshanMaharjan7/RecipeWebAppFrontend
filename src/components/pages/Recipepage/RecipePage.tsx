import { Outlet } from "react-router-dom";
import Layout from "../../Layout";
import RecipeCard from "../../RecipeCard";

const RecipePage = () => {
  return (
    <Layout>
        <div className="grid grid-cols-4 gap-4 py-[40px]">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        </div>
        <Outlet/>
     
    </Layout>
  );
};

export default RecipePage;
