import Slider from "react-slick"
import ProductCard from "./ProductCard"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { PuffLoader } from "react-spinners"

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
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

function ProductSlider({ value = 1, index = 1, products = [], loading }) {
  return (
    <div className="product-slider">
      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <>
          {Array.isArray(products) && products?.length ? (
            <>
              {value === index && (
                <Slider className="product-slider__list" {...settings}>
                  {products?.map((p, i) => {
                    return (
                      <div className="product-slider__item" key={i}>
                        <ProductCard product={p} />
                      </div>
                    )
                  })}
                </Slider>
              )}
            </>
          ) : (
            <div className="product-slider__empty">
              <h3>Không có sản phẩm</h3>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ProductSlider
