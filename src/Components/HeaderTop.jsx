import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeaderTop = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const offerTexts = [
    "USE CODE CURE 10 & GET 10% OFF (INCLUDES 5% ON PREPAID)",
    "FREE SHIPPING ON ORDERS OVER ₹500",
    "LIMITED TIME OFFER: BUY 1 GET 1 FREE ON SELECTED ITEMS",
  ];

  return (
    <div className="relative bg-[#895129] text-white h-[50px] sm:h-[40px] flex items-center overflow-hidden">
      {/* Phone Number - only on sm and up */}
      <div className="hidden sm:flex items-center space-x-2 pl-4 pr-2 z-10">
        <PhoneIcon style={{ fontSize: '16px' }} />
        <a href="tel:+919691997997" className="underline text-sm sm:text-base ">
          +919691997997
        </a>
      </div>

      {/* Centered Carousel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-3 sm:px-5 max-w-[90%] sm:max-w-[600px]">
          <Slider {...settings}>
            {offerTexts.map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[50px] sm:h-[40px] text-center px-2"
              >
                <span className="text-sm sm:text-base whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;