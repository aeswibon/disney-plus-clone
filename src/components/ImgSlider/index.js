import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Carousel, Wrap } from "./StyledImgSliderElements";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpeg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpeg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpeg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpeg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    );
}

export default ImgSlider;
