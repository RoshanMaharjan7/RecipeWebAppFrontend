import { useForm } from "react-hook-form";
import LoginLayout from "../../LoginLayout";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
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
      <div className="bg-[#F8F8F8] h-fit p-10 w-[45%] rounded-2xl space-y-8">
        <h2 className="text-center text-[36px]">
          Log <span className="text-[#fb780e]">In</span>
        </h2>
        <form
          onSubmit={handleSubmit(handleSubmition)}
          className="flex flex-col gap-8"
        >
          <span className="flex flex-col">
            <label htmlFor="" className="font-semibold text-[20px]">
              Email
            </label>
            <input
              type="text"
              {...register("Email")}
              className="px-5 py-4 rounded-md border border-gray-200 text-[18px]"
            />
          </span>
          <span className="flex flex-col">
            <span className="flex justify-between items-center">
              <label htmlFor="" className="font-semibold text-[20px]">
                Password
              </label>
              <Link to="/forgot-password" className="font-medium text-[16px]">
                Forgot Password?
              </Link>
            </span>

            <span className="relative">
              <input
                type={showPassword? 'text':'password'}
                {...register("Password")}
                className="px-5 py-4 rounded-md border border-gray-200 text-[18px] w-full"
              />

              <button onClick={() => setShowPassword(c => !c)}>
                {
                    showPassword? <IoEyeOffOutline className="absolute top-4 right-5 text-[28px]" /> :  <IoEyeOutline className="absolute top-4 right-5 text-[28px]" />
                }
               
              </button>
            </span>
          </span>
          <button type="submit" className="px-5 py-4 rounded-md bg-[#fb780e] text-[18px] font-semibold text-[#F8F8F8]">Log In</button>
        </form>

        <p className="font-semibold text-center">Don't have an account? <Link to='/signup' className="text-[#fb780e]">Sign Up</Link></p>
      </div>
    </LoginLayout>
  );
};

export default LoginPage;
