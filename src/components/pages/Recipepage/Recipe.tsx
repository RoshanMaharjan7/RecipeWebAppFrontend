import { useParams } from "react-router-dom"
import Headbar from "../../Headbar"
import Layout from "../../Layout"
import { useGetRecipeById } from "../../../../services/RecipeApi"

const Recipe = () => {

    const {id} = useParams()

    const {data: RecipeData} = useGetRecipeById(id||"")

  return (
    <Layout>
        ds
    </Layout>
  )
}

export default Recipe