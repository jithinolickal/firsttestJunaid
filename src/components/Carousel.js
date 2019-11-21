import React from "react";
import { Carousel } from "react-responsive-carousel";
// import A1 from "../../public/carouselImages/"
/* import A2 from "../carouselImages/ronyinsta"
import A3 from "../carouselImages/sreyas"
import A4 from "../carouselImages/sticker" */

const A1 = require('../carouselImages/A1.jpg');
const A2 = require('../carouselImages/ronyinsta.jpg');
const A3 = require('../carouselImages/sreyas.jpg');
const A4 = require('../carouselImages/sticker.jpg');


export default () => (
  <Carousel autoPlay>
    <div >
      <img src={A1} style={{filter: "blur(8px)"}}/>
    <div className="im1" ></div>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={A2} style={{filter: "blur(8px)"}}/>
      <div className="im2"></div>
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={A3} style={{filter: "blur(8px)"}}/>
      <div className="im3"></div>
      <p className="legend">Legend 3</p>
    </div>
    <div >
      <img src={A4} style={{filter: "blur(8px)"}}/>
      <div className="im4" ></div>
      <p className="legend">Legend 4</p>
    </div>
    
  </Carousel>
);
