import { useMutation } from "@tanstack/react-query";
import {Axios} from "./AxiosInstance"

export const useLogin = () => {
    return useMutation({
      mutationFn: async (postData) => {
        console.log(postData);
        const res = await Axios.post('/users/login', postData);
        return await res.data;
      },
    });
  };