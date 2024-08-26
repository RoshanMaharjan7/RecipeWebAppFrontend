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