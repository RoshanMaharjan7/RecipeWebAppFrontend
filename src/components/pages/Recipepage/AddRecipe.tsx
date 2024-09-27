import { useForm, useFieldArray } from "react-hook-form";
import Layout from "../../Layout";
import { TiDelete } from "react-icons/ti";
import { IoAddCircle } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import CategorySearchBar from "../../CategorySearch";
import { useCreateRecipe } from "../../../../services/RecipeApi";
import toast from "react-hot-toast";

type FormValues = {
  title: string;
  description: string;
  recipeImage: any;
  category: { categoryId: string; categoryName: string }[];
  ingredients: { quantity: string; name: string }[];
  directions: { step: string }[];
};

const AddRecipe = () => {
  const { register, handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      recipeImage: null,
      category: [],
      ingredients: [{ quantity: "", name: "" }],
      directions: [{ step: "" }],
    },
  });

  const {
    fields: categoryField,
    append: appendCategory,
    remove: removeCategory,
  } = useFieldArray<FormValues>({
    control,
    name: "category",
  });

  const {
    fields: ingredientsField,
    append: appendIngredients,
    remove: removeIngredients,
  } = useFieldArray<FormValues>({
    control,
    name: "ingredients" as const,
  });

  const {
    fields: directionsField,
    append: appendDirections,
    remove: removeDirections,
  } = useFieldArray<FormValues>({
    control,
    name: "directions" as const,
  });

  const { mutate } = useCreateRecipe();

  // form submit function
  const onSubmit = (data: FormValues) => {
    console.log(data);

    const postData = {
      ...data,
      recipeImage: data.recipeImage[0],
      directions: data.directions.map(({ step }) => step),
    };
    console.log(postData);
    mutate(postData, {
      onSuccess: () => {
        toast.success("Recipe Added Successfully");
      },
      onError: () => {
        toast.error("Error Adding Recipe");
      }
    });
  };

  return (
    <Layout>
      <h2 className="text-[24px] md:text-[1.8rem] mt-[12px] sm:mt-[20px]">
        Add New<span className="text-[#fb780e]"> Recipe</span>
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[80%] mx-auto p-6 my-[40px] rounded-md border-2 border-[#e5e5e5]"
      >
        <div className="grid grid-cols-3">
          <span className="col-span-1">
            <label htmlFor="" className="text-[#fb780e] font-semibold">
              Recipe Title
            </label>
            <p className="text-slate-400 text-sm">Add a title to your recipe</p>
          </span>

          <input
            className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2"
            {...register("title", { required: true })}
          />
        </div>

        <hr className="border-slate-300 border-1 my-6" />

        <div className="grid grid-cols-3">
          <span className="col-span-1">
            <label htmlFor="" className="text-[#fb780e] font-semibold">
              Recipe Description
            </label>
            <p className="text-slate-400 text-sm">
              Add description to your recipe
            </p>
          </span>

          <textarea
            className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md p-2 resize-none h-24"
            {...register("description", { required: true })}
          />
        </div>

        <hr className="border-slate-300 border-1 my-6" />

        <div className="grid grid-cols-3">
          <span className="col-span-1">
            <label htmlFor="" className="text-[#fb780e] font-semibold">
              Recipe Image
            </label>
            <p className="text-slate-400 text-sm">Add a image to your recipe</p>
          </span>

          <input
            type="file"
            className="col-span-2 border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
            {...register("recipeImage", { required: true })}
          />
        </div>

        <hr className="border-slate-300 border-1 my-6" />

        <div className="grid grid-cols-3">
          <span className="col-span-1">
            <label htmlFor="" className="text-[#fb780e] font-semibold">
              Recipe Category
            </label>
            <p className="text-slate-400 text-sm">Add a title to your recipe</p>
          </span>

          <div className="col-span-2 space-y-2 ">
            <span className="flex items-center gap-2">
              <label htmlFor="" className="text-slate-400">
                Categories:
              </label>
              <ul className="flex gap-2">
                {categoryField.map((category, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="px-2 py-1 bg-slate-200 flex items-center gap-1 rounded-md">
                    {category.categoryName}{" "}
                      <button
                        type="button"
                        onClick={() => removeCategory(index)}
                        className=""
                      >
                        <RxCross1 className="" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            </span>
            <CategorySearchBar className="" appendCategory={appendCategory} />
          </div>
        </div>

        <hr className="border-slate-300 border-1 my-6" />

        <div className="grid grid-cols-3">
          <span className="col-span-1">
            <label htmlFor="" className="text-[#fb780e] font-semibold">
              Recipe Ingredients
            </label>
            <p className="text-slate-400 text-sm">
              Add ingredients to your recipe
            </p>
          </span>

          <div className="col-span-2 space-y-2">
            <span className="flex gap-4">
              <label htmlFor="" className="text-slate-400 w-[18%]">
                Quantity
              </label>
              <label htmlFor="" className="text-slate-400">
                Ingredient
              </label>
            </span>
            <ul className="space-y-1">
              {ingredientsField.map((field, index) => (
                <li key={index} className="flex gap-4">
                  <input
                    type="text"
                    {...register(`ingredients.${index}.quantity`, {
                      required: true,
                    })}
                    className="w-[18%] border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
                  />
                  <input
                    type="text"
                    {...register(`ingredients.${index}.name`, {
                      required: true,
                    })}
                    className="flex-grow border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
                  />
                  <button
                    type="button"
                    onClick={() => removeIngredients(index)}
                    className="bg-red-500 px-2 rounded-md"
                  >
                    <TiDelete className="text-[28px] text-white" />
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                appendIngredients({ quantity: "", name: "" });
              }}
              className="bg-[#fb780e] text-white text-[18px] font-medium px-2 py-2 rounded-md flex gap-2 w-full items-center justify-center"
            >
              <IoAddCircle className="text-[24px]" />
              Add Ingredients
            </button>
          </div>
        </div>

        <hr className="border-slate-300 border-1 my-6" />

        <div className="grid grid-cols-3">
          <span className="col-span-1">
            <label htmlFor="" className="text-[#fb780e] font-semibold">
              Recipe Directions
            </label>
            <p className="text-slate-400 text-sm">
              Add directions to your recipe
            </p>
          </span>

          <div className="col-span-2 space-y-2">
            <span className="flex gap-4">
              <label htmlFor="" className="text-slate-400 w-[18%]">
                Directions
              </label>
            </span>
            <ul className="space-y-1">
              {directionsField.map((field, index) => (
                <li key={index} className="flex gap-4">
                  <input
                    type="text"
                    {...register(`directions.${index}.step`, {
                      required: true,
                    })}
                    className="flex-grow border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
                  />
                  <button
                    type="button"
                    onClick={() => removeDirections(index)}
                    className="bg-red-500 px-2 rounded-md"
                  >
                    <TiDelete className="text-[28px] text-white" />
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                appendDirections({ step: "" });
              }}
              className="bg-[#fb780e] text-white text-[18px] font-medium px-2 py-2 rounded-md flex gap-2 w-full items-center justify-center"
            >
              <IoAddCircle className="text-[24px]" />
              Add Directions
            </button>
          </div>
        </div>

        <hr className="border-slate-300 border-1 my-6" />
        <button className=" bg-gradient-to-r from-[#f7ba2c] via-[#fb780e] to-[#ea5459] text-white text-[18px] font-medium px-2 py-2 rounded-md flex gap-2 w-full items-center justify-center">
          Add Recipe
        </button>
      </form>
    </Layout>
  );
};

export default AddRecipe;
