import { useForm } from "react-hook-form";
import Layout from "../../Layout";

const AddRecipe = () => {
    const {register, handleSubmit} = useForm()
  return (
    <Layout>
      <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        Add New<span className="text-[#fb780e]"> Recipe</span>
      </h2>

      <form onSubmit={handleSubmit((data)=>console.log(data))}>

        <span>
            <label htmlFor=""></label>
        </span>

      </form>
    </Layout>
  );
};

export default AddRecipe;
