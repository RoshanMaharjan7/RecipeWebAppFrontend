import Layout from "../../Layout";
import {
  useGetUserProfile,
  useUpdateUserProfile,
} from "../../../../services/AuthenticationApi";
import { PencilLine, Pizza, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import RecipeCard from "../../RecipeCard";
import { useGetMyRecipes } from "../../../../services/RecipeApi";
import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const ProfilePage = () => {
  const { data: UserProfile } = useGetUserProfile();
  const { data: MyRecipes } = useGetMyRecipes();
  const queryClient = useQueryClient();

  const [recipesToShow, setRecipesToShow] = useState(
    UserProfile?.data.favouriteRecipes || []
  );
  const [shownRecipes, setShownRecipes] = useState(false);

  useEffect(() => {
    setRecipesToShow(UserProfile?.data.favouriteRecipes);
  }, [UserProfile]);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (UserProfile) {
      reset({
        fullName: UserProfile?.data.fullName || '', // Update these mappings
        bio: UserProfile?.data.bio || '',
        // Add more fields as necessary
      });
    }
  }, [UserProfile, reset]);

  const { mutate } = useUpdateUserProfile();
  const onSubmit = (data: any) => {
    const postData = { id: UserProfile?.data._id, ...data };
    mutate(postData, {
      onSuccess: () => {
        toast.success("Profile Updated");
        queryClient.invalidateQueries({
          queryKey: ["profile"],
      });
      },
      onError: () => {
        toast.error("Error Updating Profile");
      },
    });
  };



  return (
    <Layout>
      <div className="flex justify-center items-center py-[80px]">
        <div className="flex gap-10">
          <img
            src={`https://avatar.iran.liara.run/username?username=${UserProfile?.data.fullName}`}
            alt=""
          />
          <div className="flex flex-col justify-between py-4">
            <span className="flex justify-between items-center gap-52">
              <h2 className="text-[24px] md:text-[1.5 rem]">
                User <span className="text-[#fb780e]">Profile</span>
              </h2>
              <Dialog>
                <DialogTrigger className="font-semibold font-righteous flex items-center gap-4">
                  <PencilLine />
                  Edit Profile
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-[var(--primary)] font-medium text-2xl">
                      <span className="text-black">Update</span> Profile
                    </DialogTitle>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <span className="flex flex-col">
                        <label htmlFor="" className="font-medium text-lg">
                          Full Name:
                        </label>
                        <input
                          className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#fb780e] focus:ring-opacity-50"
                          {...register("fullName")}
                        />
                      </span>

                      <span className="flex flex-col">
                        <label htmlFor="" className="font-medium text-lg">
                          Bio:
                        </label>
                        <textarea
                          className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md p-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[#fb780e] focus:ring-opacity-50"
                          {...register("bio")}
                        />
                      </span>

                      <button className=" bg-gradient-to-r from-[#f7ba2c] via-[#fb780e] to-[#ea5459] text-white text-[18px] font-medium px-2 py-2 rounded-md flex gap-2 w-full items-center justify-center">
                        Update
                      </button>
                    </form>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </span>

            <span>
              <p className="font-righteous text-lg">
                {UserProfile?.data.fullName}
              </p>
              <p className="font-righteous text-[#636363]">
                {UserProfile?.data.email}
              </p>
            </span>
            <span>
              <p className="font-righteous text-lg">Bio</p>
              <p className=" text-[#636363]">
                {UserProfile?.data.bio || "N/A"}
              </p>
            </span>
          </div>
        </div>
      </div>
      <div>
        {UserProfile?.data.role === "user" && (
          <h2 className="text-[24px] md:text-[1.8rem] font-righteous">
            Favourite <span className="text-[#fb780e]">Recipes</span>
          </h2>
        )}

        {UserProfile?.data.role !== "user" && (
          <div className="flex gap-7">
            <button
              onClick={() => {
                setRecipesToShow(UserProfile?.data.favouriteRecipes);
                setShownRecipes(false);
              }}
              className={cn(
                "text-[20px] md:text-[1.5rem] font-righteous text-black/60",
                !shownRecipes && "text-[24px] md:text-[1.8rem] text-black"
              )}
            >
              Favourite{" "}
              <span className={cn("", !shownRecipes && "text-[#fb780e]")}>
                Recipes
              </span>
            </button>
            <button
              onClick={() => {
                setRecipesToShow(MyRecipes?.data);
                setShownRecipes(true);
              }}
              className={cn(
                "text-[20px] md:text-[1.5rem] font-righteous text-black/60",
                shownRecipes && "text-[24px] md:text-[1.8rem] text-black"
              )}
            >
              Your{" "}
              <span className={cn("", shownRecipes && "text-[#fb780e]")}>
                Recipes
              </span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-[20px] md:py-[40px]">
          {recipesToShow?.map(
            ({
              _id,
              title,
              ratings,
              recipeImage,
              category,
            }: {
              _id: string;
              title: string;
              ratings: number;
              recipeImage: string;
              category: any;
            }) => (
              <RecipeCard
                key={_id}
                id={_id}
                title={title}
                rating={ratings}
                recipeImage={recipeImage}
                category={category}
              />
            )
          )}
          {recipesToShow?.length === 0 && (
            <div className="flex flex-col items-center justify-center col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 gap-4">
              <Pizza size={100} />
              <p className="font-righteous text-xl">No Recipes Found</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
