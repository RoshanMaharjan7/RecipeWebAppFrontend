
import { useEffect, useState } from 'react';
import { useGetCurrentUser } from '../../../services/AuthenticationApi';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog';
import { Trash2, X } from 'lucide-react';
import { useDeleteRecipeById } from '../../../services/RecipeApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({chefId, recipeId}:{chefId:any, recipeId: string}) => {
    console.log("chiefId",chefId);
    const navigate = useNavigate();
    const { data: currentUser } = useGetCurrentUser();
    const {mutate: deleteRecipe} = useDeleteRecipeById();
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        if (currentUser && currentUser.data.id === chefId || currentUser.data.role === 'admin') {
          
            setShowDelete(true);
        }
    }, [currentUser,chefId]);
    
    const handleDelete = () => {
        deleteRecipe({recipeId}, {onSuccess: () => {
            toast.success('Recipe Deleted')
            navigate('/recipes')
        }, onError: () => {
            toast.error('Error Deleting Recipe')
        }});
    }

    if(!showDelete) return null;
  return (
    <div>
    <Dialog>
    <DialogTrigger className='flex items-center gap-2 text-white bg-red-500 font-semibold px-3 py-2 rounded-full hover:bg-red-600'>
        <X/>
        Delete
    </DialogTrigger>
    <DialogContent className="w-[22rem]">
      <div className="flex flex-col gap-3 items-center">
        <span className="flex justify-center items-center bg-red-100/40 p-5 rounded-full">
          <Trash2 className="text-red-500 text-[2rem]" />
        </span>
        <span className="text-center space-y-1">
        <h2 className="text-[22px] font-semibold font-poppins">Delete?</h2>
        <p className="text-[12px] font-semibold text-gray-400">Are you sure you want to delete?</p>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <DialogClose asChild>
          <button
            className="text-[14px] py-4 rounded-xl hover:bg-red-600 font-semibold text-white bg-red-500"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>
        </DialogClose>
        <DialogClose asChild>
          <button className="text-[14px] py-4 rounded-xl  font-semibold bg-red-100/40 text-">
            Cancel
          </button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
  </div>
  )
}

export default DeleteButton