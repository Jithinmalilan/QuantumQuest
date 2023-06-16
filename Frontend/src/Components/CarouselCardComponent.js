import "../Styles/Components/CarouselCardComponent.css"
import React, {Component} from "react";
import Slider from "react-slick";
import { API_BASE_URL } from '../Global/Constants';

export default class CarouselCardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carousel_data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL+'/carouseldata');
      const jsonData = JSON.parse(await response.json());
      this.setState({ carousel_data: jsonData });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  render() {

    const { carousel_data } = this.state;
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
      <Slider {...settings} autoplay="true">
      {
        carousel_data.map((data) => (
            <div className="wrapper" key={data.id}>
              <img className="sliderImg" src={data.image_url} alt={data.alt} />
            </div>
          )
        )
      }
      </Slider>
    );
  }
}

