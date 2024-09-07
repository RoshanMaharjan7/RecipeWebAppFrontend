import { useForm } from "react-hook-form";
import { useCreateCategory } from "../../../../services/RecipeApi";

type CategoryData = {
  categoryTitle: string;
  categoryImage: any;
};

const AddCategory = ({appendCategory, setQuery}:any) => {
  const { register, handleSubmit } = useForm<CategoryData>({
    defaultValues: {
      categoryTitle: "",
      categoryImage: null,
    },
  });

  const { mutate } = useCreateCategory();

  const onSubmit = (data: CategoryData) => {
    console.log(data);
    const postData = {
      ...data,
      categoryImage: data.categoryImage[0],
    };

    mutate(postData, {
        onSuccess: (data) => {
          console.log(data);
            appendCategory({categoryId: data.data._id, categoryName: data.data.categoryTitle})
            setQuery("")
        },
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col gap-2 ">
        <span className="">
          <label htmlFor="" className="text-[var(--primary)] font-semibold">
            Category Title
          </label>
          <p className="text-slate-400 text-sm">Add a title to your category</p>
        </span>

        <input
          className="border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
          {...register("categoryTitle", { required: true })}
        />
      </div>

      <hr className="border-slate-300 border-1 my-6" />

      <div className="w-full flex flex-col gap-2 ">
        <span>
          <label htmlFor="" className="text-[var(--primary)] font-semibold">
            Category Image
          </label>
          <p className="text-slate-400 text-sm">Add a image to your category</p>
        </span>

        <input
          type="file"
          className="border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
          {...register("categoryImage", { required: true })}
        />
      </div>

      <hr className="border-slate-300 border-1 my-6" />

      <button className=" bg-gradient-to-r from-[#f7ba2c] via-[#fb780e] to-[#ea5459] text-white text-[18px] font-medium px-2 py-2 rounded-md flex gap-2 w-full items-center justify-center">
        Add Category
      </button>
    </form>
  );
};

export default AddCategory;
