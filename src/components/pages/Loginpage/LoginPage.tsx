import { useForm } from "react-hook-form";
import LoginLayout from "../../LoginLayout";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Axios } from "../../../../services/AxiosInstance";
import Cookies from "js-cookie";
import { useLogin } from "../../../../services/AuthenticationApi";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useLogin();

  const navigate = useNavigate()

  const handleSubmition = async (data: any) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        Cookies.set("token", data.token);
        toast.success("Logged In Successfully");
        navigate('/')
      },
      onError: () => {
        toast.error("Invalid Credentials");
      }
    });
  };
  return (
    <LoginLayout>
      <h2 className="text-center text-[36px]">
        Log <span className="text-[#fb780e]">In</span>
      </h2>
      <form
        onSubmit={handleSubmit(handleSubmition)}
        className="flex flex-col gap-8"
      >
        <span className="flex flex-col">
          <label htmlFor="" className="font-semibold text-[16px]">
            Email
          </label>
          <input
            type="text"
            {...register("email", { required: true })}
            className="px-5 py-3 md:py-4 rounded-md border border-gray-200 text-[14px] md:text-[18px]"
          />
          {errors.email && (
            <p className="text-red-600">* Email field required</p>
          )}
        </span>
        <span className="flex flex-col">
          <span className="flex justify-between items-center">
            <label htmlFor="" className="font-semibold text-[16px]">
              Password
            </label>
            <Link to="/forgot-password" className="font-medium text-[14px]">
              Forgot Password?
            </Link>
          </span>

          <span className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="px-5 py-3 md:py-4 rounded-md border border-gray-200 text-[14px] md:text-[18px] w-full"
            />

            <button type="button" onClick={() => setShowPassword((c) => !c)}>
              {showPassword ? (
                <IoEyeOffOutline className="absolute top-3 md:top-4 right-3 md:right-5 text-[22px] md:text-[28px]" />
              ) : (
                <IoEyeOutline className="absolute top-3 md:top-4 right-3 md:right-5 text-[22px] md:text-[28px]" />
              )}
            </button>
          </span>
          {errors.password && (
            <p className="text-red-600">* Password field required</p>
          )}
        </span>
        <button
          type="submit"
          className="px-5 py-3 md:py-4 rounded-md bg-[#fb780e] text-[18px] font-semibold text-[#F8F8F8]"
        >
          Log In
        </button>
      </form>

      <p className="font-semibold text-center text-[14px] md:text-[16px]">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#fb780e]">
          Sign Up
        </Link>
      </p>
    </LoginLayout>
  );
};

export default LoginPage;
