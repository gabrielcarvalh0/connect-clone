import { LogoConnect } from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { SearchBar } from "./SearchBar";

export function NavBar() {
  const [open, setOpen] = useState(false);

  function dropDownMenu(value: any) {
    setOpen(value);
  }
  return (
    <header className="relative w-full  bg-blue-900 border-b border-gray-600">
      <div className="max-w-7xl  mx-auto ">
        <div className="flex flex-row gap-2 items-center  justify-evenly  w-full  py-3 px-3 md:justify-center md:space-x-0">
          <div className="md:hidden mr-2">
            <button
              type="button"
              aria-expanded="false"
              onClick={() => {
                dropDownMenu(true);
              }}
            >
              <span className="sr-only">Open menu</span>
              <FaBars size={25} className="text-gray-50" />
            </button>
          </div>
          <div className="md:w-5/12  flex flex-row items-center gap-6 justify-start  ">
            <div>
              <LogoConnect />
            </div>
            <div className="hidden md:flex ">
              <button className="flex items-center text-start gap-6">
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
                  <span className="text-xs text-gray-50">Ofertas para</span>
                  <span className="text-xs text-gray-50">
                    Presidente Prudente - 19053-821
                  </span>
                </div>
                <FaAngleDown size={25} className=" text-gray-50" />
              </button>
            </div>
          </div>

          <div className="md:w-4/12 ml-0 hidden md:block pr-6">
            <SearchBar />
          </div>

          <div className="flex items-center  m-0 gap-2 md:gap-6">
            <div className="col-auto   pr-4 pl-4 md:pl-0 md:pr-0">
              <div className="hidden md:flex gap-4">
                <button className="flex gap-4 items-center fill-gray-200 text-gray-200 hover:text-white hover:fill-white">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 512.00003 512.00003"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m256 0c-107.941406 0-195.765625 87.824219-195.765625 195.765625v180.703125c0 24.914062 20.265625 45.179688 45.175781 45.179688 24.914063 0 45.179688-20.265626 45.179688-45.179688v-150.585938c0-24.910156-20.265625-45.175781-45.179688-45.175781-5.070312 0-9.867187 1.027344-14.425781 2.574219 6.425781-85.511719 77.902344-153.164062 165.015625-153.164062 87.066406 0 158.523438 67.589843 165.007812 153.042968-4.53125-1.550781-9.355468-2.453125-14.417968-2.453125-24.914063 0-45.179688 20.265625-45.179688 45.175781v150.585938c0 24.914062 20.265625 45.179688 45.179688 45.179688 5.304687 0 10.324218-1.085938 15.058594-2.773438v17.832031c0 8.308594-6.765626 15.058594-15.058594 15.058594h-108.1875c-6.238282-17.492187-22.796875-30.117187-42.402344-30.117187-24.910156 0-45.175781 20.265624-45.175781 45.175781 0 24.910156 20.265625 45.175781 45.175781 45.175781 19.605469 0 36.164062-12.628906 42.402344-30.117188h108.1875c24.910156 0 45.175781-20.265624 45.175781-45.175781 0-90.578125 0-150.265625 0-240.941406 0-107.941406-87.824219-195.765625-195.765625-195.765625zm0 0"></path>
                    <path d="m481.882812 213.597656v175.15625c17.488282-6.234375 30.117188-22.792968 30.117188-42.402344v-90.351562c0-19.605469-12.628906-36.164062-30.117188-42.402344zm0 0"></path>
                    <path d="m0 256v90.351562c0 19.609376 12.628906 36.167969 30.117188 42.402344v-175.15625c-17.488282 6.238282-30.117188 22.796875-30.117188 42.402344zm0 0"></path>
                  </svg>
                  <FaAngleDown size={25} />
                </button>
              </div>
            </div>
            <div className="col-auto  pr-4 pl-4 md:pl-0 md:pr-0">
              <div className="header-account">
                <div className="">
                  <a
                    href="/account"
                    className="flex flex-row items-center gap-4 fill-gray-200 text-gray-200 hover:text-white hover:fill-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                      className=""
                    >
                      <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148 C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962 c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216 h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40 c59.551,0,108,48.448,108,108S315.551,256,256,256z"></path>
                    </svg>
                    <span className="hidden md:inline-flex text-xs">
                      Minha Conta
                    </span>
                    <FaAngleDown size={25} className="hidden md:block " />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="cart relative">
                <div className="">
                  <a
                    href="/account"
                    className="flex flex-row items-center gap-4  fill-gray-200 text-gray-200 hover:text-white hover:fill-white"
                  >
                    <svg
                      height="25"
                      width="25"
                      viewBox="0 -31 512.00026 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"></path>
                      <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path>
                      <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path>
                    </svg>

                    <div className="left-6 -top-2 absolute flex justify-center items-center px-1 py-0 rounded-full bg-orange-500 text-gray-50">
                      <span className="text-sm">0</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  md:hidden">
          <SearchBar />
        </div>
      </div>
      <div className="md:hidden w-full mt-4 p-2 py-3 flex justify-center bg-gray-800">
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

      <div className="max-w-7xl mx-auto ">
        <nav className="hidden md:block md:max-w-8xl  mx-auto ">
          <ul className="flex items-center flex-row ">
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a className="flex flex-row  items-center px-2" href="#home">
                <i className="iconExample main"></i>
                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Todos os departamentos
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center h px-2"
                href="#home"
              >
                <i className=" iconExample som-e-video"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Som e Vídeo
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample farois-lanternas-e-iluminacao "></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Faróis, Lanternas e Iluminação
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2  shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample acessorios-internos"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Acessórios Internos
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample acessorios-externos"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Acessórios Externos
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample motocicletas"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Motos
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2  shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample pneus-rodas-e-calotas"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Pneus, Rodas e Calotas{" "}
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample volantes-e-retrovisores"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Volantes e Retrovisores
                </span>
              </a>
            </li>
            <li className="min-w-[88px] py-2 shadow-lg rounded-t-md  hover:shadow-orange-500/100 hover:bg-orange-500 items-center  ">
              <a
                className="w-full flex flex-row items-center px-2"
                href="#home"
              >
                <i className=" iconExample mecanica"></i>

                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Mecânica e Performance
                </span>
              </a>
            </li>
            <li className="min-w-[110px]  shadow-lg rounded-t-md  hover:shadow-orange-500/100 bg-orange-500 items-center hover:text-white  ">
              <a
                className="flex flex-row px-4 items-center py-2 "
                href="#home"
              >
                <svg
                  className="text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 489 489"
                  width="18px"
                  height="18px"
                >
                  <g>
                    <path
                      d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#F6F2F2"
                      fill="#FDFDFD"
                    ></path>
                  </g>
                </svg>
                <span className="ml-1 text-sm font-medium leading-3 text-gray-100">
                  Outlet
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav
        className={`${
          open === false ? "hidden" : ""
        } fixed top-0 transition-all z-10 ease-out duration-500  md:hidden`}
      >
        <div className="divide-y-2 w-10/12 divide-gray-500  bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className=" pt-5 pb-6">
            <div className="flex items-center justify-start gap-6 px-4">
              <div className="">
                <button
                  type="button"
                  onClick={() => {
                    dropDownMenu(false);
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-gray-500 p-2 text-gray-200 hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                >
                  <FaBars size={25} className="text-gray-50" />
                </button>
              </div>
              <div className="w-6/12">
                <LogoConnect />
              </div>
            </div>

            <ul className="mt-6 flex flex-row flex-wrap calcView overflow-scroll">
              <li className="flex w-full h-14 bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
              <li className="flex w-full h-14 hover:bg-orange-500 items-center  ">
                <a className="flex flex-row items-center px-2" href="#home">
                  <svg
                    className="text-gray-50"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 489 489"
                    width="18px"
                    height="18px"
                  >
                    <g>
                      <path
                        d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3 c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1 C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462 H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"
                        data-original="#000000"
                        className="active-path"
                        data-old_color="#F6F2F2"
                        fill="#FDFDFD"
                      ></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm font-medium  text-gray-50">
                    Outlet
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
