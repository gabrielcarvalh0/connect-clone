import { LogoConnect } from "./Logo";
import { FaAngleDown, FaBars, FaSearch } from "react-icons/fa";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <div className="relative flex flex-col bg-blue-900">
      <div className="container mx-auto md:px-6">
        <div className="flex flex-col md:flex-col  items-center  m-0 p-6">
          <div className="flex justify-between w-full px-4 gap-6">
            <div className="col-auto  order-0 mr-auto flex  items-center gap-6">
              <div className="flex items-center gap-4">
                <button type="button" className="md:hidden">
                  <FaBars size={30} className="text-gray-50" />
                </button>
                <div className="">
                  <a href="#">
                    <LogoConnect />
                  </a>
                </div>
              </div>

              <div className="hidden md:flex">
                <button className="flex items-center gap-2">
                  <svg
                    width="20"
                    data-name="Livello 1"
                    id="Livello_1"
                    className="fill-gray-50"
                    viewBox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64,128a6.9,6.9,0,0,1-4.89-2L26.23,93.12A55.05,55.05,0,0,1,10,53.69,53.29,53.29,0,0,1,25.87,15.58a54.56,54.56,0,0,1,76.26,0h0A53.29,53.29,0,0,1,118,53.69a55.05,55.05,0,0,1-16.23,39.43L68.89,125.94A6.9,6.9,0,0,1,64,128ZM64,6A48.19,48.19,0,0,0,30.08,19.85,47.34,47.34,0,0,0,16,53.7,49.1,49.1,0,0,0,30.47,88.87l32.87,32.82a.91.91,0,0,0,1.31,0L97.53,88.87A49.1,49.1,0,0,0,112,53.7,47.34,47.34,0,0,0,97.92,19.85h0A48.19,48.19,0,0,0,64,6Z"></path>
                    <path d="M64,81.41a27.25,27.25,0,1,1,19.3-8A27.23,27.23,0,0,1,64,81.41Zm0-48.49a21.26,21.26,0,1,0,15.06,6.22h0A21.25,21.25,0,0,0,64,32.92Z"></path>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-50">Ofertas para</span>
                    <span className="text-gray-50">
                      Presidente Prudente - 19053-821
                    </span>
                  </div>
                  <FaAngleDown size={25} className=" text-gray-50" />
                </button>
              </div>
            </div>
            <div
              className="hidden  md:block md:columns-xl  order-1 mt-2 lg:mt-0"
              id="header-search"
            >
             <SearchBar/>
            </div>
            <div className="col-auto flex items-center order-1 order-lg-2">
              
            </div>
          </div>

          <div
            className="w-full col-auto md:hidden order-1 mt-2 lg:mt-0"
            id="header-search"
          >
            <div className="box-busca">
              <div className="box-busca">
                <fieldset className="w-full block border border-gray-400 shadow-md rounded-md relative">
                  <div className="input-search-container flex h-16  w-full">
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
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full p-2 py-3 flex justify-center bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="header-cep__svg">
            <svg
              width="20"
              data-name="Livello 1"
              id="Livello_1"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-gray-50"
            >
              <title></title>
              <path d="M64,128a6.9,6.9,0,0,1-4.89-2L26.23,93.12A55.05,55.05,0,0,1,10,53.69,53.29,53.29,0,0,1,25.87,15.58a54.56,54.56,0,0,1,76.26,0h0A53.29,53.29,0,0,1,118,53.69a55.05,55.05,0,0,1-16.23,39.43L68.89,125.94A6.9,6.9,0,0,1,64,128ZM64,6A48.19,48.19,0,0,0,30.08,19.85,47.34,47.34,0,0,0,16,53.7,49.1,49.1,0,0,0,30.47,88.87l32.87,32.82a.91.91,0,0,0,1.31,0L97.53,88.87A49.1,49.1,0,0,0,112,53.7,47.34,47.34,0,0,0,97.92,19.85h0A48.19,48.19,0,0,0,64,6Z"></path>
              <path d="M64,81.41a27.25,27.25,0,1,1,19.3-8A27.23,27.23,0,0,1,64,81.41Zm0-48.49a21.26,21.26,0,1,0,15.06,6.22h0A21.25,21.25,0,0,0,64,32.92Z"></path>
            </svg>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-gray-50">Ofertas para São Paulo</span>
            <FaAngleDown size={25} className="text-gray-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
