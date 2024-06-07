import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './hot-offers.module.scss'
import {mapped} from "../../../../assets/sliderArr.ts";
import {useRef, useState} from "react";
import {DotsPaging} from "./dots-paging/dots-paging.tsx";

type Props = {}

export function HotOffers({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);


  const settings = {
    dots: true,
    infinite: true,
    speed: 1900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    arrows: false,
    customPaging: (i: number) => (
      <DotsPaging
        toggleSlide={(slideIndex) => {
          if (sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);
          }
        }}
        i={i}
        currentSlide={currentSlide}
      />
    ),
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className={s.content}>
      <div className={s.container}>
        <Slider ref={sliderRef} {...settings} >
          {mapped.map((item) => (
            <div className={s.imgBody} key={item}>
              <img className={s.image} src={item} alt={item}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}