import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "./data";
import "./SliderComponent.css";
import MenuImg from "./MenuImg.jsx";

const SliderComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const settings = {
    centerMode: true,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    swipe: true,
    infinite: true,
    swipeToSlide: true,
  };

  const handleImgClick = (itemId) => {
    setSelectedImg(itemId);
  };

  const closeMenuImg = () => {
    setSelectedImg(null);
  };

  return (
    <div>
      {!selectedImg && (
        <div className="slick-slider">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} onClick={() => handleImgClick(item.id)}>
                <img src={item.linkImg} alt={`Slide ${item.id}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
      {selectedImg && (
        <div className="menu-img-container" onClick={closeMenuImg}>
          <MenuImg
            imgSrc={data.find((item) => item.id === selectedImg)?.linkImg}
            onClose={closeMenuImg}
          />
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
