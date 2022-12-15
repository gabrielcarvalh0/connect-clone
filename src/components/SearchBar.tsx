import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className="">
        <fieldset className="w-full flex border border-gray-400 shadow-md rounded-md">
          <div className="flex h-12  w-full">
            <input
              className="input-search bg-gray-50 rounded-l-md outline-none flex-1 text-gray-500 w-full pl-4"
              placeholder="Digite o que deseja encontrar..."
            />
            <button
              type="submit"
              className="w-16 flex justify-center items-center rounded-r-md   bg-green-500"
            >
              <FaSearch size={25} className="text-gray-50 " />
            </button>
          </div>
        </fieldset>
    </div>
  );
}
