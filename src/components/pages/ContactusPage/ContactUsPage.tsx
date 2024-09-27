
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateUserProfile } from "../../../../services/AuthenticationApi";

const ContactUsPage = () => {
    const {register, handleSubmit, reset} = useForm();
  

    const onSubmit = (data: any) => {
        console.log(data);
        toast.success("Query Submitted Successfully");
        reset();
    }
  return (
    <Layout>
      <h2 className="text-[24px] md:text-[1.8rem] my-[12px]  sm:my-[20px]">
        Contact <span className="text-[#fb780e]">Us</span>
      </h2>
      <div className="flex gap-6 justify-between mb-10">
        <div className="w-[38%] space-y-6">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-[#fb780e] text-[1.5rem]">TasteTreasure</h3>
            <span className=" text-[14px] space-y-2">
              <p>Discover Your New Favourite Dish With Our Tasty Recipes</p>
              <p>
                Elevate your culinary game with our flavourful recipes, explore
                a world of delicious possibilites today!
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#fb780e] text-[1.2rem]">Connect with Us</h3>
            <span className="text-[14px] space-y-2">
              <Link to="/" className="flex items-center gap-2">
                <CiFacebook className="text-[16px]" />
                Facebook
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <IoLogoInstagram className="text-[16px]" />
                Instagram
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <FaXTwitter className="text-[16px]" />
                Twitter
              </Link>
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[45%] bg-white border-2 border-slate-100 rounded-xl shadow-md p-6 space-y-6">
        <span className="flex flex-col">
            <label htmlFor="" className="font-medium text-lg">Full Name:</label>
            <input
            className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#fb780e] focus:ring-opacity-50"
            {...register("fullName", { required: true })}
          />
        </span>
        <span className="flex flex-col">
            <label htmlFor="" className="font-medium text-lg">Email:</label>
            <input
            className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#fb780e] focus:ring-opacity-50"
            {...register("email", { required: true })}
          />
        </span>
        <span className="flex flex-col">
            <label htmlFor="" className="font-medium text-lg">Query:</label>
            <textarea
            className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md p-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[#fb780e] focus:ring-opacity-50"
            {...register("description", { required: true })}
          />
        </span>

        <button className=" bg-gradient-to-r from-[#f7ba2c] via-[#fb780e] to-[#ea5459] text-white text-[18px] font-medium px-2 py-2 rounded-md flex gap-2 w-full items-center justify-center">
          Submit
        </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
