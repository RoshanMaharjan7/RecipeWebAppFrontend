import { cn } from "../lib/utils.ts"
import { TfiSearch } from 'react-icons/tfi'

const SearchBar = ({className}:{className:string}) => {
  return (
    <div className={cn("relative max-w-[300px] h-fit", className)}>
        <input
          type="text"
          placeholder="Search Recipe"
          className="w-full border border-black rounded-md py-2 px-3 pr-14 placeholder:font-light text-[14px]"
        />
        <TfiSearch className="absolute top-2.5 right-4 text-[20px]"/>
      </div>
  )
}

export default SearchBar