import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import SectionContainer from "./SectionContainer";

export function CardListRef() {
  return (
    <SectionContainer className="mt-24 ">
      <div className="mx-auto text-center md:px-[166px] md:px-24">
        <h3 className="text-xl md:text-[25px] m-[16px] text-gray-900 font-medium">
          INDISPENSÁVEIS PARA TODO O CARRO
        </h3>
        <p className="font-normal w-full md:m-[25px] mt-0 text-sm text-[#282828] break-before-all">
          Desfrute de um nível totalmente novo de experiência de direção com
          nossa seleção detalhada de lâmpadas automotivas, pastilhas de freio,
          velas de ignição e outras peças.automotivas e acessórios projetados
          para manter seu carro funcionando da melhor maneira.
        </p>
      </div>

      {/* <div className="w-full flex mt-14 overflow-x-auto  ">
        <div className=" w-full grid grid-cols-5 gap-6 ">
            <a className="relative flex flex-row bg-red-500 shadow-md ">
             <div className="flex flex-col flex-shrink-0">
             <img
                className=" absolute left-4 -top-12"
                loading="lazy"
                alt="pastilhas de freio"
                src="https://connectparts.vteximg.com.br/arquivos/bf_2020_icon_pastilha.png?v=637412314140300000"
              />
              <div className="bg-orange-500   mt-5 mr-2 p-4 ">
                <h4 className="font-bold text-sm">Pastilhas de Freio</h4>
                <p className="text-xs md:text-[14px]">
                  Obtenha poder de parada confiável{" "}
                </p>
              </div>
             </div>
              <div className="bg-green-500 col-end-3    flex  items-center ">
                <FaChevronRight size={30} />
              </div>
            </a>
        
        </div>
      </div> */}
      <div className="w-100   ">
        <div className="flex flex-row items-center pt-5 md:flex-row  w-100 max-w-7xl overflow-scroll  md:grid md:grid-cols-5">
          <div className="flex flex-row shrink-0 items-center align-center   m-4 p-2  rounded-md bg-white relative shadow-lg">
            <img
              className="rounded-full  absolute left-4 -top-10"
              src={
                "https://connectparts.vteximg.com.br/arquivos/bf_2020_icon_pastilha.png?v=637412314140300000"
              }
              alt=""
            />

            <div className="  mt-2 mr-2 p-4 ">
              <h4 className="font-bold text-sm mb-2">Pastilhas de Freio</h4>
              <p className="text-xs md:text-[14px]">
                Obtenha poder de parada confiável{" "}
              </p>
            </div>

            <div className=" col-end-3    flex  items-center ">
              <FaChevronRight size={30} />
            </div>
          </div>
          <div className="flex flex-row shrink-0 items-center align-center   m-4 p-2  rounded-md bg-white relative shadow-lg ">
            <img
              className="rounded-full  absolute left-4 -top-10"
              src={
                "https://connectparts.vteximg.com.br/arquivos/bf_2020_icon_lampadas.png?v=637412314137470000"
              }
              alt=""
            />

            <div className="  mt-2 mr-2 p-4 ">
              <h4 className="font-bold text-sm">Lâmpadas</h4>
              <p className="text-xs md:text-[14px]">
              Maior saída de luz e vida útil prolongada
              </p>
            </div>

            <div className=" col-end-3    flex  items-center ">
              <FaChevronRight size={30} />
            </div>
          </div>
          <div className="flex flex-row shrink-0 items-center align-center   m-4 p-2   rounded-md bg-white relative shadow-lg">
            <img
              className="rounded-full  absolute left-4 -top-10"
              src={
                "https://connectparts.vteximg.com.br/arquivos/bf_2020_icon_filtro.png?v=637412314133900000"
              }
              alt=""
            />

            <div className="  mt-2 mr-2 p-4 ">
              <h4 className="font-bold text-sm">Filtros de Ar</h4>
              <p className="text-xs md:text-[14px]">
              Maximize o desempenho do motor
              </p>
            </div>

            <div className=" col-end-3    flex  items-center ">
              <FaChevronRight size={30} />
            </div>
          </div>
          <div className="flex flex-row shrink-0 items-center align-center   m-4 p-2   rounded-md bg-white relative shadow-lg">
            <img
              className="rounded-full  absolute left-4 -top-10"
              src={
                "https://connectparts.vteximg.com.br/arquivos/bf_2020_icon_oleo.png?v=637412314138400000"
              }
              alt=""
            />

            <div className="  mt-2 mr-2 p-4 ">
              <h4 className="font-bold text-sm">Óleo de Motor</h4>
              <p className="text-xs md:text-[14px]">
              Óleo de qualidade premium para o seu motor
              </p>
            </div>

            <div className=" col-end-3    flex  items-center ">
              <FaChevronRight size={30} />
            </div>
          </div>
          <div className="flex flex-row shrink-0 items-center align-center   m-4 p-2   rounded-md bg-white relative shadow-lg">
            <img
              className="rounded-full  absolute left-4 -top-10"
              src={
                "https://connectparts.vteximg.com.br/arquivos/bf_2020_icon_vela.png?v=638028345535200000"
              }
              alt=""
            />

            <div className="  mt-2 mr-2 p-4 ">
              <h4 className="font-bold text-sm">Velas</h4>
              <p className="text-xs md:text-[14px]">
              Manter a eficiência do motor
              </p>
            </div>

            <div className=" col-end-3    flex  items-center ">
              <FaChevronRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
