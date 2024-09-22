import Layout from "../../Layout";
import { useGetUserProfile } from "../../../../services/AuthenticationApi";
import { PencilLine } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import RecipeCard from "../../RecipeCard";

const ProfilePage = () => {
  const { data: UserProfile } = useGetUserProfile();

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
                      <span className="text-black">Add New</span> Category
                    </DialogTitle>
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
        <h2 className="text-[24px] md:text-[1.8rem] font-righteous">
        Favourite <span className="text-[#fb780e]">Recipes</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-[20px] md:py-[40px]">
        {
          UserProfile?.data.favouriteRecipes.map(({_id,title, ratings, recipeImage, category}:{_id:string,title:string, ratings: number, recipeImage: string, category:any})=> (
            <RecipeCard key={_id} id={_id} title={title} rating={ratings} recipeImage={recipeImage} category={category}/>
          ))
        }
      </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
