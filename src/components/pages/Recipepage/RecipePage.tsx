import { Outlet } from "react-router-dom";
import Layout from "../../Layout";
import RecipeCard from "../../RecipeCard";
import Headbar from "../../Headbar";

const RecipePage = () => {
  return (
    <Layout>
      <Headbar />
      <h2 className="text-[1.8rem] mt-[20px]">
        Discover <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 py-[20px] md:py-[40px]">
        <RecipeCard title="Choumein" rating={4} />
        <RecipeCard title="Mo:Mo" rating={5} />
        <RecipeCard title="Keema Noodle" rating={3} />
        <RecipeCard title="Kothey Mo:Mo" rating={1} />
        <RecipeCard title="Mo:Mo" rating={2} />
      </div>
      <Outlet />
    </Layout>
  );
};

export default RecipePage;
