import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import {
  useGetRecipeById,
  useGetReviewByRecipe,
  usePostReview,
} from "../../../../services/RecipeApi";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";
import RatingStars from "../../RatingStars";
import {  useQueryClient } from "@tanstack/react-query";
import FavouritesButton from "../../utils/FavouritesButton";
import DeleteButton from "../../utils/DeleteButton";
import RatingButton from "../../utils/RatingButton";
import toast from "react-hot-toast";

const Recipe = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: RecipeData } = useGetRecipeById(id || "");
  const { data: ReviewData } = useGetReviewByRecipe(id || "");
  console.log(ReviewData?.data);
  console.log(RecipeData?.data.ratings)
  // const averageRating = ReviewData?.data.reviews.length > 0 ? 
  // ReviewData?.data.reviews.reduce((accumulator, review) => {
  //   return accumulator + review.stars;
  // }, 0) / reviews.length : 0

  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const stars = watch("stars");

  const { mutate } = usePostReview();

  const onSubmit = (data: any) => {
    const postData = { ...data, recipeId: RecipeData?.data._id };
    mutate(postData, {
      onSuccess: () => {
        toast.success("Review Posted");
        reset();
        queryClient.invalidateQueries({
          queryKey: ["reviews", id],
        });
        queryClient.invalidateQueries({
          queryKey: [id],
        });

      },
      onError: () => {
        toast.error("Error Posting Review");
      },
    });
  };

  return (
    <Layout>
      <main className="space-y-10 my-2 md:my-6 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px]">
            {RecipeData?.data.title}
          </h2>
          <span className="flex gap-8">
            <DeleteButton chefId={RecipeData?.data.chief._id} recipeId={RecipeData?.data._id}/>
            <RatingStars rating={RecipeData?.data.ratings} className="text-xl" />
           <FavouritesButton recipeId={RecipeData?.data._id} />
          </span>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between gap-16">
          <section className="flex flex-col gap-16 lg:w-4/6">
            <div className="flex flex-col gap-6">
              <h4 className="text-[28px]">Ingredients</h4>
              <span className="flex flex-col gap-2">
                {RecipeData?.data.ingredients.map((ingredient: any) => (
                  <span
                    key={ingredient._id}
                    className="flex items-center gap-2"
                  >
                    <p className="text-[18px] font-semibold">
                      {ingredient.name}
                    </p>
                    -<p>{ingredient.quantity}</p>
                  </span>
                ))}
              </span>
            </div>

            <div className="space-y-6">
              <h4 className="text-[28px]">Directions</h4>
              <span className="flex flex-col gap-4">
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
          </section>
          <section className="flex flex-col items-center lg:items-start gap-4 lg:w-2/6">
            <img
              src={RecipeData?.data.recipeImage}
              alt={RecipeData?.data.tile}
              className="max-h-[280px] w-[400px] rounded-xl"
            />
            <p className="text-sm font-medium">
              {RecipeData?.data.description}
            </p>
            <p className="font-semibold text-xl text-[#fb780e]">Recipe By: <span className="underline text-lg text-black">{RecipeData?.data.chief.fullName}</span></p>
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 max-w-[500px]  flex-grow"
        >
          <span className="flex flex-col md:flex-row md:items-center gap-6">
            <label htmlFor="" className="font-righteous text-[24px]">
              Rate this Recipe:{" "}
            </label>
            {/* <input
              type="text"
              {...register("stars", { required: true })}
              className="bg-slate-100 border border-slate-300 rounded-md text-[16px] py-2 px-3 flex-grow"
            /> */}
            <RatingButton stars={stars} setValue={setValue} />
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

        <div className="">
          <h4 className="text-[28px]">All Reviews</h4>
          {ReviewData?.data.map((review: any) => (
            <div
              key={review._id}
              className="border-b-2 border-black/30 space-y-3 py-4"
            >
              <span className="flex gap-4 items-center">
                <img
                  src={`https://avatar.iran.liara.run/username?username=${review.reviewer.fullName}`}
                  alt={review.reviewer.fullName}
                  width={50}
                  height={50}
                />
                <p className="text-lg font-medium">
                  {review.reviewer.fullName}
                </p>
              </span>
              <RatingStars rating={review.stars} />
              <p>{review.reviewText}</p>
            </div>
          ))}

          {RecipeData?.data.reviews.length === 0 && <p>No reviews yet</p>}
        </div>
      </main>
    </Layout>
  );
};

export default Recipe;
