import { useState } from "react";
import LoginLayout from "../../LoginLayout";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmition = (data: any) => {
    console.log(data);
  };

  return (
    <LoginLayout>
      <h2 className="text-center text-[36px]">
        Sign <span className="text-[#fb780e]">Up</span>
      </h2>
      <form
        onSubmit={handleSubmit(handleSubmition)}
        className="flex flex-col gap-8"
      >
        <span className="flex flex-col">
          <label htmlFor="" className="font-semibold text-[16px]">
            Full Name
          </label>
          <input
            type="text"
            {...register("fullName", { required: true })}
            className="px-5 py-4 rounded-md border border-gray-200 text-[18px]"
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
            {...register("Email", { required: true })}
            className="px-5 py-4 rounded-md border border-gray-200 text-[18px]"
          />
          {errors.Email && (
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
              {...register("Password", { required: true })}
              className="px-5 py-4 rounded-md border border-gray-200 text-[18px] w-full"
            />

            <button type="button" onClick={() => setShowPassword((c) => !c)}>
              {showPassword ? (
                <IoEyeOffOutline className="absolute top-4 right-5 text-[28px]" />
              ) : (
                <IoEyeOutline className="absolute top-4 right-5 text-[28px]" />
              )}
            </button>
          </span>
          {errors.Password && (
            <p className="text-red-600">* Password field required</p>
          )}
        </span>
        <button
          type="submit"
          className="px-5 py-4 rounded-md bg-[#fb780e] text-[18px] font-semibold text-[#F8F8F8]"
        >
          Sign Up
        </button>
      </form>

      <p className="font-semibold text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-[#fb780e]">
          Log In
        </Link>
      </p>
    </LoginLayout>
  );
};

export default SignUpPage;
