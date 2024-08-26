import { useQuery } from "@tanstack/react-query";
import {Axios} from "./AxiosInstance"

export const useGetAllRecipes = () => {
    return useQuery<any>({
        queryKey: ["recipes"],
        queryFn: async () => {
            const response = await Axios.get('/recipe');
            return await response.data
        }
    })
}

export const useGetAllCategory = () => {
    return useQuery<any>({
        queryKey: ["category"],
        queryFn: async () => {
            const response = await Axios.get('/category');
            return await response.data
        }
    })
}


// Fetch Category By ID
export const useGetCategoryById = (categoryId: string) => {
    return useQuery<any>({
      queryKey: [categoryId],
      queryFn: async (id: any): Promise<any> => {
        const response = await Axios.get('/category/' + id.queryKey[0]);
        console.log(response.data);
        return await response.data;
      },
    });
  };


// Fetch Category By ID
export const useGetRecipeById = (recipeId: string) => {
    return useQuery<any>({
      queryKey: [recipeId],
      queryFn: async (id: any): Promise<any> => {
        const response = await Axios.get('/recipe/' + id.queryKey[0]);
        console.log(response.data);
        return await response.data;
      },
    });
  };