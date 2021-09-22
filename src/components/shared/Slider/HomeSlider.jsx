import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CollegeImg from "../../../images/college.jpg";
import './HomeSlider.css'
const HomeSlider = () => {
  return (
    <div className="slider">
      <Carousel 
        className='sliderAll'
        autoPlay 
        interval="5000" 
        transitionTime="1000"
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
      >
        <img src={CollegeImg} alt="College Image" />
        <img src={CollegeImg} alt="College Image" />
        <img src={CollegeImg} alt="College Image" />
      </Carousel>
    </div>
  );
};

export default HomeSlider;
