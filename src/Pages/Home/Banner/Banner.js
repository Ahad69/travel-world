import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const img1 = 'https://i.ibb.co/4pBT8tW/4-K-Ultra-HD-Beach-Wallpapers-3840-X2160-51-1.jpg'
const img2 = 'https://i.ibb.co/9bSS1sD/546391-1-1.jpg'
const img3 = 'https://i.ibb.co/3hSRCzS/3872x2592-147758-niagara-falls-4k-ultra-hd-wallpaper-1.jpg'

const Banner = () => {
    return (
        <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="800px"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p className="banner-title text-start text-warning">Welcome <br /> <span>To Travel World . </span></p>
                    <h1 className="text-danger fw-bold">Yyteri Beach </h1>
                    <h2 className="caption">Yyteri is famous for its beach, which stretches for about six kilometres. It is very popular among people</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="800px"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <p className="banner-title text-start text-success">Welcome <br /> <span>To Travel World . </span></p>
                    <h1 className="text-info fw-bold">Eiffel Tower</h1>
                    <h2 className="caption">The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="800px"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <p className="banner-title text-start text-dark">Welcome <br />  <span>To Travel World . </span></p>
                    <h1 className="text-danger fw-bold">Niagara Falls</h1>
                    <h2 className="caption">Niagara Falls is a city on the Niagara River, in New York State. It’s known for the vast Niagara Falls.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    );
};

export default Banner;