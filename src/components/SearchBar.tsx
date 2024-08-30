import { useEffect, useState } from "react"
import { cn } from "../lib/utils.ts"
import { TfiSearch } from 'react-icons/tfi'
import { Axios } from "../../services/AxiosInstance.ts"
import { Link } from "react-router-dom"

const SearchBar = ({className}:{className:string}) => {
  const [query, setQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [searchData, setSearchData] = useState([])


  const fetchSearchData = async() =>{
    const response = await Axios.post("/recipe/search", {query: query})
    setSearchData(response.data.data)
  }


  useEffect(()=> {
    if(query !== ""){
      setShowSearch(true)
      setTimeout(fetchSearchData,1000)
    } else{
      setSearchData([])
      setShowSearch(false)
    }
  },[query])
  return (
    <div className={cn("relative max-w-[300px] h-fit", className)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Recipe"
          className="w-full border border-black rounded-md py-2 px-3 pr-14 placeholder:font-light text-[14px]"
        />
        <TfiSearch className="absolute top-2.5 right-4 text-[20px]"/>
        <span className={`absolute top-10 left-0 w-full px-4 py-2 bg-white min-h-[100px] max-h-[550px] border border-slate-200 rounded-lg ${showSearch?"block":"hidden"}`}>
          <p className="text-[#fb780e] font-medium text-[16px] pb-2">Search Results</p>
          <hr />
          <span className="flex flex-col">
          {searchData?.map(({_id, title}: {_id:string, title: string})=> (
            <Link to={`/recipes/${_id}`} className="font-semibold py-3 border-b-2 border-slate-100">{title}</Link>
          ))}
          </span>
         


        </span>
      </div>
  )
}

export default SearchBar