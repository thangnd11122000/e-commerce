import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";

function ProductSlide({ value = 1, index = 1, products }) {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    
    ],
  };

  return (
    <div className="product-slide">
      {value === index &&
        (products.length ? (
          <Slider
            className="product-slide__slider"
            {...settings}
          >
            {products.map((p, i) => {
              return (
                <div className="product-slide__container" key={i}>
                  <Product product={p} />
                </div>
              );
            })}
          </Slider>
        ) : (
          <h3 className="product-slide__message">No Products</h3>
        ))}
    </div>
  );
}

export default ProductSlide;
