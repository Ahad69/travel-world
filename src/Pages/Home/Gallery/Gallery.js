// import React from 'react';
import React, { Component } from "react";
import Slider from "react-slick";
import './Gallery.css'


const img1 = 'https://i.ibb.co/bFZHg2q/felix-rostig-Um-V2wr-Vbq8-unsplash-1.jpg';
const img2 = 'https://i.ibb.co/Btwd3bM/eddy-billard-JOo-OPt8t-TPY-unsplash-1.jpg';
const img3 = 'https://i.ibb.co/whZhBCw/stephan-seeber-mmzu-Zhihp30-unsplash-1.jpg';
const img4 = 'https://i.ibb.co/b1q1CKW/luke-porter-NEq-EC7qa9-FM-unsplash-1.jpg';
const img5 = 'https://i.ibb.co/M7VWKfn/stefan-stefancik-0w-Mmx-NB6-Xzc-unsplash-1-1.jpg';
const img6 = 'https://i.ibb.co/P1W9MF3/dino-reichmuth-A5r-CN8626-Ck-unsplash-1.jpg';
const img7 = 'https://i.ibb.co/gWfqGVv/travel-hd.jpg';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
     <div className="container">
        <div className="slider">
        <h1 className="fw-bold">Our Gallery :</h1>
        <Slider {...settings}>
          <div>
            <h3><img className="rounded-pill m-5 p-5 " height="500px" src={img1} alt="" /></h3>
          </div>
          <div>
            <h3><img className="rounded-pill m-5 p-5"   height="500px" src={img2} alt="" /></h3>
          </div>
          <div>
            <h3><img className="rounded-pill m-5 p-5"   height="500px" src={img3} alt="" /></h3>
          </div>
          <div>
            <h3><img className="rounded-pill m-5 p-5"   height="500px" src={img4} alt="" /></h3>
          </div>
          <div>
          <h3><img className="rounded-pill m-5 p-5"   height="500px" src={img5} alt="" /></h3>
          </div>
          <div>
          <h3><img className="rounded-pill m-5 p-5"   height="500px" src={img6} alt="" /></h3>
          </div>
          <div>
          <h3><img className="rounded-pill m-5 p-5"   height="500px" src={img7} alt="" /></h3>
          </div>
        </Slider>
      </div>
     </div>
    );
  }
}