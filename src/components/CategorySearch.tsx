import { useEffect, useState } from "react";
import { cn } from "../lib/utils.ts";
import { Axios } from "../../services/AxiosInstance.ts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import AddCategory from "./pages/Recipepage/AddCategory.tsx";

const CategorySearchBar = ({
  className,
  appendCategory,
}: {
  className: string;
  appendCategory: any;
}) => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const fetchSearchData = async () => {
    const response = await Axios.post("/category/search", { query: query });
    console.log(response.data.data);
    setSearchData(response.data.data);
  };

  useEffect(() => {
    if (query !== "") {
      setShowSearch(true);
      setTimeout(fetchSearchData, 1000);
    } else {
      setSearchData([]);
      setShowSearch(false);
    }
  }, [query]);

  const handleClick = (id: string, categoryTitle: string) => {
    appendCategory({ categoryId: id, categoryName: categoryTitle });
    setQuery("");
  };
  return (
    <div className={cn("relative h-fit", className)}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=""
        className="col-span-2 w-full border-2 border-[#e5e5e5] bg-slate-50 rounded-md px-2 py-2"
      />
      <span
        className={`absolute top-12 left-0 w-full pt-2 bg-white min-h-[100px] max-h-[550px] border border-slate-200 rounded-lg ${
          showSearch ? "block" : "hidden"
        }`}
      >
        <p className="text-[#fb780e] font-medium text-[15px] px-4">
          Category Results
        </p>
        <hr className="my-1" />
        <span className="flex flex-col">
          {searchData?.map(
            ({
              _id,
              categoryTitle,
            }: {
              _id: string;
              categoryTitle: string;
            }) => (
              <button
                key={_id}
                type="button"
                onClick={() => handleClick(_id, categoryTitle)}
                className=" py-1.5 text-left text-[14px] hover:bg-slate-100 px-4 rounded-md"
              >
                {categoryTitle}
              </button>
            )
          )}
          {searchData.length === 0 && (
            <p className="px-4 py-2 text-slate-400 text-[14px] text-center">
              No category found
            </p>
          )}
        </span>
        <hr className="my-1" />
        <Dialog>
          <DialogTrigger className=" py-1.5 w-full text-[14px] max-h-fit hover:bg-slate-100 px-4 rounded-md text-[#fb780e] font-medium">
            Add New Category
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-[var(--primary)] font-medium text-2xl">
                <span className="text-black">Add New</span> Category
              </DialogTitle>
            </DialogHeader>
            <AddCategory appendCategory={appendCategory} setQuery={setQuery}/>
          </DialogContent>
        </Dialog>
      </span>
    </div>
  );
};

export default CategorySearchBar;
