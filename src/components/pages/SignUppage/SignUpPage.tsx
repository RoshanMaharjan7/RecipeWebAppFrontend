import { useState } from "react";
import LoginLayout from "../../LoginLayout";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";
import { useSignUp } from "../../../../services/AuthenticationApi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useSignUp();

  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <LoginLayout>
      <h2 className="text-center text-[36px]">
        Sign <span className="text-[#fb780e]">Up</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <span className="flex flex-col">
          <label htmlFor="" className="font-semibold text-[16px]">
            Full Name
          </label>
          <input
            type="text"
            {...register("fullName", { required: true })}
            className="px-4 py-3.5 rounded-md border border-gray-200 text-[14px]"
          />
          {errors.fullName && (
            <p className="text-red-600">* Email field required</p>
          )}
        </span>

        <span className="flex flex-col">
          <label htmlFor="" className="font-semibold text-[16px]">
            Email
          </label>
          <input
            type="text"
            {...register("email", { required: true })}
            className="px-4 py-3.5 rounded-md border border-gray-200 text-[14px]"
          />
          {errors.email && (
            <p className="text-red-600">* Email field required</p>
          )}
        </span>
        <span className="flex flex-col">
          <label htmlFor="" className="font-semibold text-[16px]">
            Password
          </label>

          <span className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="px-4 py-3.5 rounded-md border border-gray-200 text-[14px] w-full"
            />

            <button type="button" onClick={() => setShowPassword((c) => !c)}>
              {showPassword ? (
                <IoEyeOffOutline className="absolute top-3 md:top-3.5 right-3 md:right-5 text-[22px] md:text-[24px]" />
              ) : (
                <IoEyeOutline className="absolute top-3 md:top-3.5 right-3 md:right-5 text-[22px] md:text-[24px]" />
              )}
            </button>
          </span>
          {errors.password && (
            <p className="text-red-600">* Password field required</p>
          )}
        </span>

        <span className="flex space-x-4">
          <span>
            <input
              type="radio"
              id="user"
              className="hidden peer"
              value="user"
              {...register("role", { required: true })}
            />
            <label
              htmlFor="user"
              className="cursor-pointer flex items-center gap-4 bg-white border-2 border-black/50 text-black/80 p-2 rounded-md peer-checked:border-[var(--primary)] peer-checked:text-[var(--primary)] peer-checked:scale-105"
            >
              <span className="flex flex-col items-center justify-center gap-1">
                <FaUserAlt size={20} /> <h3>User</h3>
              </span>
              <p className="text-[12px] font-medium">
                View and Rate Recipes & Meal Plan and Add them to your
                favourites.
              </p>
            </label>
          </span>
          <span>
            <input
              type="radio"
              id="chef"
              className="hidden peer"
              value="chef"
              {...register("role", { required: true })}
            />
            <label
              htmlFor="chef"
              className="cursor-pointer flex items-center gap-4 bg-white border-2 border-black/50 text-black/80 p-2 rounded-md peer-checked:border-[var(--primary)] peer-checked:text-[var(--primary)] peer-checked:scale-105"
            >
              <span className="flex flex-col items-center justify-center gap-0.5">
                <PiChefHatBold size={24} /> <h3>Chef</h3>
              </span>
              <p className="text-[12px] font-medium">
                Create and View Recipes & Meal Plan and Share them to the world.
              </p>
            </label>
          </span>
        </span>

        <button
          type="submit"
          className="px-5 py-3 md:py-3.5 rounded-md bg-[#fb780e] font-semibold text-[#F8F8F8]"
        >
          Sign Up
        </button>
      </form>

      <p className="font-semibold text-center text-[14px] md:text-[16px]">
        Already have an account?{" "}
        <Link to="/login" className="text-[#fb780e]">
          Log In
        </Link>
      </p>
    </LoginLayout>
  );
};

export default SignUpPage;
