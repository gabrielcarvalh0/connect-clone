import { Component } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";
import Slider from "react-slick";
import { Ratings } from "../Ratings";

import "./style.css";

type PropsCardList = {
  title: string;
  titleSecondary?: string;
  backgroundTitle?: boolean;
};

export class CardListSlider extends Component<PropsCardList> {
  render() {
    const data = [
      {
        file: "https://connectparts.vteximg.com.br/arquivos/ids/1048307-200-200/bola-de-cambio-manopla-new-fiesta-ecosport-13-a-19-a-novo-ka-15-a-19-preta-lente-prata-5-marchas-connectparts--1-.jpg?v=637091805663130000",
        frete: true,
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/ids/1048307-200-200/bola-de-cambio-manopla-new-fiesta-ecosport-13-a-19-a-novo-ka-15-a-19-preta-lente-prata-5-marchas-connectparts--1-.jpg?v=637091805663130000",
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/ids/1048307-200-200/bola-de-cambio-manopla-new-fiesta-ecosport-13-a-19-a-novo-ka-15-a-19-preta-lente-prata-5-marchas-connectparts--1-.jpg?v=637091805663130000",
        frete: true,
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/ids/1048307-200-200/bola-de-cambio-manopla-new-fiesta-ecosport-13-a-19-a-novo-ka-15-a-19-preta-lente-prata-5-marchas-connectparts--1-.jpg?v=637091805663130000",
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/ids/1048307-200-200/bola-de-cambio-manopla-new-fiesta-ecosport-13-a-19-a-novo-ka-15-a-19-preta-lente-prata-5-marchas-connectparts--1-.jpg?v=637091805663130000",
        frete: true,
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/ids/1048307-200-200/bola-de-cambio-manopla-new-fiesta-ecosport-13-a-19-a-novo-ka-15-a-19-preta-lente-prata-5-marchas-connectparts--1-.jpg?v=637091805663130000",
      },
    ];
    const settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      dots: true,

      responsive: [
        {
          breakpoint: 1024,

          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 700,

          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          dots: true,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          dots: true,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <div>
        <div className="mb-0 flex ">
          <div
            className={`${
              this.props.backgroundTitle
                ? "p-2 bg-orange-500 text-white rounded-sm"
                : ""
            }`}
          >
            <h2 className="text-sm md:text-xl font-bold uppercase">
              {this.props.title}
            </h2>
          </div>
          <div className="flex items-end ml-4">
            <h3 className="text-sm md:text-lg font-bold uppercase">
              {this.props.titleSecondary}
            </h3>
          </div>
        </div>

        <Slider className="relative grid grid-col-2" {...settings}>
          {data.map((el) => {
            return (
              <div className="group bg-white rounded-sm px-4  h-[550px] w-[50px] hover:shadow-2xl transition ease-in ">
                <div className="flex flex-col justify-start  pt-4">
                  {el.frete && (
                    <div className="bg-orange-400 rounded-sm px-2 font-bold text-white text-xs uppercase p-1 flex gap-2 ">
                      <FaTruck />
                      <p>Frete grátis</p>
                    </div>
                  )}

                  <img src={el.file} alt="" className=" mx-auto" />
                  <Ratings />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <p>Nat</p>
                  <h3 className="text-sm text-gray-500 ">
                    Bola de Câmbio Manopla New Fiesta Hatch Sedan Ecosport Ka
                    Hatch Ka+ Preto com Lente Prata 5 Marchas
                  </h3>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-xs text-gray-400 line-through">
                    R$ 335,90
                  </span>
                  <span className="font-bold text-xl ml-[2px]">279,90</span>
                  <span className="text-orange-500 text-[14px]">
                    Em 5x de R$ 55,98 s/juros
                  </span>
                </div>
                <div className="mt-6 pb-6 group-hover:visible flex transition duration-150 ease-in  flex-row justify-start gap-8 md:gap-3 items-center md:invisible   ">
                  <div className="w-3/12">
                    <div className=" flex  border-gray-400 ">
                      <input
                        type="text"
                        name="quantity"
                        className="border w-8 border-gray-400 p-2"
                      />

                      <div className="flex border flex-col justify-between p-1">
                        <FaAngleUp />
                        <FaAngleDown />
                      </div>
                    </div>
                  </div>

                  <div className="w-6/12">
                    <button className="flex gap-2 flex-row items-center bg-green-500 p-4 px-6 rounded-sm shadow-lg hover:shadow-green-500/100 text-white text-sm font-bold">
                      <FaShoppingCart size={20} />
                      <span className="hidden md:block uppercase ">
                        Comprar
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
