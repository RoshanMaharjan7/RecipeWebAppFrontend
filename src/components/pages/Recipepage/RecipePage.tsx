import { Outlet } from "react-router-dom";
import Layout from "../../Layout";
import RecipeCard from "../../RecipeCard";
import {
  useGetAllCategory,
  useGetAllRecipes,
} from "../../../../services/RecipeApi";
import { useEffect, useReducer, useState } from "react";
import { filterReducer } from "./FilterReducer";
import { cn } from "../../../lib/utils";

type filterType = {
  sortBy: string;
  categories: string[];
};

const RecipePage = () => {
  const { data: recipeData } = useGetAllRecipes();
  const { data: categoryData } = useGetAllCategory();
  console.log(recipeData?.data);
  const [filters, setFilters] = useState<filterType>({
    sortBy: "",
    categories: [],
  });

  const handleSort = (e: any) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  const handleCategories = (categoryId: string) => {
    if (filters.categories.includes(categoryId)) {
      setFilters({
        ...filters,
        categories: filters.categories.filter((id) => id !== categoryId),
      });
    } else {
      setFilters({
        ...filters,
        categories: [...filters.categories, categoryId],
      });
    }
  };

  const [filteredRecipes, dispatch] = useReducer(
    filterReducer,
    recipeData?.data || []
  );

  useEffect(() => {
    // Update filteredRecipes whenever recipeData changes
    if (recipeData?.data) {
      dispatch({ type: "SET_RECIPES", payload: recipeData.data });
    }
  }, [recipeData]);

  useEffect(() => {
    if (filters.categories.length > 0) {
      const filteredByCategory = recipeData?.data.filter((recipe: any) => {
        return recipe.category.some((category: any) =>
          filters.categories.includes(category.categoryId)
        );
      });
      dispatch({ type: "SET_RECIPES", payload: filteredByCategory });
    }

    if(filters.categories.length === 0){
      dispatch({ type: "SET_RECIPES", payload: recipeData?.data });
    }

    if (filters.sortBy === "latest") {
      dispatch({ type: "NEWEST", payload: filters.sortBy });
    } else if (filters.sortBy === "oldest") {
      dispatch({ type: "OLDEST", payload: filters.sortBy });
    } else if (filters.sortBy === "top-rated") {
      dispatch({ type: "TOP_RATED", payload: filters.sortBy });
    } else if (filters.sortBy === "lowest-rated") {
      dispatch({ type: "LOWEST_RATED", payload: filters.sortBy });
    } else if (filters.sortBy === "most-reviewed") {
      dispatch({ type: "MOST_REVIEWED", payload: filters.sortBy });
    }
  }, [filters]);

  return (
    <Layout>
      <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        Discover <span className="text-[#fb780e]">Recipes</span>
      </h2>
      <div className="flex gap-6 ">
        <div className="w-1/4 mt-[40px]  h-fit  p-4 hidden lg:flex flex-col gap-4">
          <span className="flex items-center justify-between">
            <h3 className="text-xl">Filters</h3>
            <button
              onClick={() => {
                setFilters({ sortBy: "", categories: [] });
                dispatch({ type: "SET_RECIPES", payload: recipeData.data });
              }}
              className="text-red-600"
            >
              Reset
            </button>
          </span>

          <hr className="border-black/70 border-2" />
          <div className="space-y-2">
            <h4>Sort By:</h4>

            <label htmlFor="latest" className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                id="latest"
                value="latest"
                onClick={handleSort}
              />
              Latest
            </label>
            <label htmlFor="oldest" className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                id="oldest"
                value="oldest"
                onClick={handleSort}
              />
              Oldest
            </label>
            <label htmlFor="top-rated" className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                id="top-rated"
                value="top-rated"
                onClick={handleSort}
              />
              Top Rated
            </label>
            <label htmlFor="lowest-rated" className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                id="lowest-rated"
                value="lowest-rated"
                onClick={handleSort}
              />
              Lowest Rated
            </label>
            <label htmlFor="most-reviewed" className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                id="most-reviewed"
                value="most-reviewed"
                onClick={handleSort}
              />
              Most Reviewed
            </label>
          </div>

          <div className="space-y-2">
            <h4>By Categories:</h4>
            <div className="flex items-center flex-wrap gap-2">
              {categoryData?.data.map(
                ({
                  _id,
                  categoryTitle,
                }: {
                  _id: string;
                  categoryTitle: string;
                }) => {
                  let selected = filters.categories.includes(_id);
                  return (
                    <button
                      type="button"
                      key={_id}
                      className={cn(
                        "text-sm border-2 border-slate-200 px-2 py-0.5 rounded-full",
                        selected && "bg-[#fb780e] border-[#fb780e] text-white"
                      )}
                      onClick={() => handleCategories(_id)}
                    >
                      {categoryTitle}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 py-[20px] md:py-[40px]">
          {filteredRecipes?.map(
            ({
              _id,
              title,
              ratings,
              recipeImage,
              category,
            }: {
              _id: string;
              title: string;
              ratings: number;
              recipeImage: string;
              category: any;
            }) => (
              <RecipeCard
                key={_id}
                id={_id}
                title={title}
                rating={ratings}
                recipeImage={recipeImage}
                category={category}
              />
            )
          )}

          {filteredRecipes?.length === 0 && <p>No recipes found</p>}
        </div>
      </div>

      <Outlet />
    </Layout>
  );
};

export default RecipePage;
