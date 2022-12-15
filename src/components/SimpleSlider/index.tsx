import React, { Component } from "react";
import Slider from "react-slick";

import  "./style.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4600,
    };
    const data = [
      {
        file: "https://connectparts.vteximg.com.br/arquivos/12-12-22-banner-desk_01.png?v=638064443300300000",
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/12-12-22-banner-desk_06.png?v=638064443310470000",
      },
      {
        file: "https://connectparts.vteximg.com.br/arquivos/12-12-22-banner-desk_04.png?v=638064443306400000",
      },
    ];
    return (
        <Slider {...settings}>
          {data.map((arr, i) => {
            return (
              <div key={i}>
                <img className="w-screen" src={arr.file} />
              </div>
            );
          })}
        </Slider>
    );
  }
}
