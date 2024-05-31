import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}

export function HotOffers({}: Props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "260px",
    slidesToShow: 1,
    speed: 1500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="slider-container" style={{border: '1px solid red', height: '100%'}}>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

