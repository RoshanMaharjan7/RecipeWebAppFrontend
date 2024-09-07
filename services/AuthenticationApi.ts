import { useMutation, useQuery } from "@tanstack/react-query";
import { Axios } from "./AxiosInstance";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (postData) => {
      console.log(postData);
      const res = await Axios.post("/users/login", postData);
      return await res.data;
    },
  });
};

export const useGetCurrentUser = () => {
  return useQuery<any>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await Axios.get("/users/current-user");
      return await response.data;
    },
  });
};
