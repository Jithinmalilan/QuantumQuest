import "../Styles/Components/CarouselCardComponent.css"
import React, {Component} from "react";
import Slider from "react-slick";
import CarouselData from "../Assets/Data/CarouselData.json"


const images = CarouselData

export default class CarouselCardComponent extends Component {

    render() {
      const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides"
      };
  
      return (
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div className="wrapper" key={image.id}>
                <img className="sliderImg" src={image.image_url} alt={image.alt} />
              </div>
            );
          })}
        </Slider>
      );
    }
}

