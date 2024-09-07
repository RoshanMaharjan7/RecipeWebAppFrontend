import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
  useGetRecipeById,
  usePostReview,
} from "../../../../services/RecipeApi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Recipe = () => {
  const { id } = useParams();

  const { data: RecipeData } = useGetRecipeById(id || "");

  const { register, handleSubmit } = useForm();

  const { mutate } = usePostReview();

  const onSubmit = (data: any) => {
    const postData = {...data, recipeId: RecipeData?.data._id}
    mutate(postData, {
      onSuccess: () => {
        console.log("success");
      },
      onError: ()=>{
        console.log("error");
      }
    });
  };

  return (
    <Layout>
      <main className="space-y-10 my-2 md:my-6 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[36px] md:text-[48px]">
            {RecipeData?.data.title}
          </h2>
          <button className="flex items-center justify-center border-2 border-black p-2 rounded-full">
            <MdFavoriteBorder className="text-[20px] md:text-[24px]" />
          </button>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
          <section className="flex flex-col gap-6">
            <h4 className="text-[28px]">Ingredients</h4>
            <span className="flex flex-col gap-2">
              {RecipeData?.data.ingredients.map(
                (ingredient: any, index: number) => (
                  <>
                  <p key={ingredient._id}>{ingredient.quantity}</p>
                  <p key={index} className="text-[18px]">
                    {ingredient.name}
                  </p>
                  </>
                )
              )}
            </span>
          </section>
          <section className="flex flex-col gap-4">
            <img
              src={RecipeData?.data.recipeImage}
              alt={RecipeData?.data.tile}
              className="max-h-[280px] w-[400px] rounded-xl"
            />
            <p className="font-righteous">{RecipeData?.data.description}</p>
            <span className="flex flex-col gap-2">
              <p className="font-righteous text-[14px]">Share to:</p>
              <span className="flex gap-6">
                <FaFacebook className="text-[32px]" />
                <FaFacebookMessenger className="text-[32px]" />
                <FaInstagramSquare className="text-[32px] rounded-full" />
                <SiGmail className="text-[32px]" />
                <FaWhatsappSquare className="text-[32px] rounded-full" />
              </span>
            </span>
          </section>
        </div>
        <div className="space-y-6">
          <h4 className="text-[28px]">Directions</h4>
          <span className="flex flex-col gap-2">
            {RecipeData?.data.directions.map(
              (ingredient: any, index: number) => (
                <span key={index} className="flex gap-4 items-center">
                  <p className="font-righteous text-[36px]">{index + 1}</p>
                  {ingredient}
                </span>
              )
            )}
          </span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 max-w-[500px]  flex-grow"
        >
          <span className="flex flex-col md:flex-row md:items-center gap-6">
            <label htmlFor="" className="font-righteous text-[24px]">
              Rate this Recipe:{" "}
            </label>
            <input
              type="text"
              {...register("stars", { required: true })}
              className="bg-slate-100 border border-slate-300 rounded-md text-[16px] py-2 px-3 flex-grow"
            />
          </span>
          <span className="flex flex-col md:flex-row gap-x-12">
            <label htmlFor="" className="font-righteous text-[24px]">
              Write a review:
            </label>
            <textarea
              {...register("reviewText", { required: true })}
              className="bg-slate-100 border border-slate-300 rounded-md text-[16px] py-2 px-3 flex-grow resize-none h-[120px]"
            />
          </span>

          <button className="bg-[#fb780e] text-[#F8F8F8] px-3 py-1.5 rounded-md font-medium">
            Add Review
          </button>
        </form>

        <div>
          <h4 className="text-[28px]">All Reviews</h4>
          {
            RecipeData?.data.reviews.map((review:any) => (
              <>
              <p>{review.stars}</p>
              <p>{review.reviewText}</p>
              <p>{review.reviewer}</p>
              </>
            ))
          }
          dssd
        </div>
      </main>
    </Layout>
  );
};

export default Recipe;
