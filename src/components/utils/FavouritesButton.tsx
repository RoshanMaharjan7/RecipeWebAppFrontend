import { useEffect, useState } from "react"
import { useAddToFavorites, useGetFavoriteRecipes, useRemoveFromFavorites } from "../../../services/RecipeApi";
import toast from "react-hot-toast";

import { Heart } from "lucide-react";


const FavouritesButton = ({recipeId}:{recipeId:string}) => {
    const [isFavourite, setIsFavourite] = useState(false)

    const { data: favouritesData} = useGetFavoriteRecipes();

    const { mutate: addFavourite } = useAddToFavorites();

    const {mutate: removeFavourite} = useRemoveFromFavorites();

    useEffect(() => {
        if (favouritesData && favouritesData.favouriteRecipes) {
            const isFav = favouritesData.favouriteRecipes.some((recipe: any) => recipe === recipeId);
            setIsFavourite(isFav);
        }
    }, [favouritesData, recipeId]);
    


    const handleFavourite = (e:any) => {
        e.stopPropagation();
        if(!favouritesData){
            toast.error('Please login to add to favourites')
            return
        }
        if(isFavourite){
            removeFavourite({recipeId}, {onSuccess: () => {
                setIsFavourite(false)
                toast.success('Removed from favourites')
            }, onError: () => {
                console.log('error')
            }
            })
          
        } else {
            addFavourite({recipeId})
            setIsFavourite(true)
            toast.success('Added to favourites')
        }
    }
    
  return (
    <button onClick={handleFavourite} className="active:scale-50 transition-all">
        {
            isFavourite ? <Heart fill="#FF0000" stroke="#FF0000" size={30}/> : <Heart size={30}/>
        }
        
    </button>
  )
}

export default FavouritesButton