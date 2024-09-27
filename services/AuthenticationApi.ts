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

export const useSignUp = () => {
  return useMutation({
    mutationFn: async (postData) => {
      console.log(postData);
      const res = await Axios.post("/users/register", postData);
      return await res.data;
    },
  });
}

export const useGetCurrentUser = () => {
  return useQuery<any>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await Axios.get("/users/current-user");
      return await response.data;
    },
  });
};

export const useGetUserProfile = () => {
  return useQuery<any>({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await Axios.get("/users/profile");
      return await response.data;
    },
  });
};

export const useUpdateUserProfile = () => {
  return useMutation({
    mutationFn: async (postData:any) => {
      console.log(postData);
      const res = await Axios.patch("/users/"+ postData.id, postData);
      return await res.data;
    },
  });
}
