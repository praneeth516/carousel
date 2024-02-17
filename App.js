// 

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} ref={sliderRef}>
        <div className="car-img">
          <img
            className="img"
            src="https://techreachall.com/home/images/Slide-1.jpg"
            alt="Slide 1"
            text="Create a Digital platform to your Amazing and Visionary Ideas thought"
          />
          <div
            className="prev"
            onClick={() => goToSlide(currentIndex - 1)}
          ></div>
          <div
            className="next"
            onClick={() => goToSlide(currentIndex + 1)}
          ></div>
        </div>
        <div className="car-img">
          <img
            className="img"
            src="https://techreachall.com/home/images/Slide-2.jpg"
            alt="Slide 2"
            text="We help Startups & Enterprises to build customized Software Solutions."
          />
          <div
            className="prev"
            onClick={() => goToSlide(currentIndex - 1)}
          ></div>
          <div
            className="next"
            onClick={() => goToSlide(currentIndex + 1)}
          ></div>
        </div>
        <div className="car-img">
          <img
            className="img"
            src="https://techreachall.com/home/images/Slide-3.jpg"
            alt="Slide 3"
            text="Build Your Digital Ideas With Our Innovative Technology Team."
          />
          <div
            className="prev"
            onClick={() => goToSlide(currentIndex - 1)}
          ></div>
          <div
            className="next"
            onClick={() => goToSlide(currentIndex + 1)}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <h1>React Carousel Slider</h1> */}
      <CarouselSlider />
    </div>
  );
}

export default App;
