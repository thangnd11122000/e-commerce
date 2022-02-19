import { Star } from "@mui/icons-material"
import Rating from "@mui/material/Rating"

const Review = () => {
  return (
    <div className="detail-review">
      <h3 className="detail-review__title">Đánh giá sản phẩm</h3>
      <div className="detail-rating">
        <div className="detail-rating__overview">
          <p>4.5</p>
          <Star />
        </div>
        <div className="detail-rating__filter">
          <button className="btn-secondary">Tất cả</button>
          <button className="btn-secondary">5 sao (0)</button>
          <button className="btn-secondary">4 sao (0)</button>
          <button className="btn-secondary">3 sao (0)</button>
          <button className="btn-secondary">2 sao (0)</button>
          <button className="btn-secondary">1 sao (0)</button>
        </div>
      </div>
      <div className="detail-rating__list">
        <div className="detail-rating__item">
          <div className="detail-rating__item--left">
            <div className="detail-rating__user">
              <img src="/img/products/product-1.jpg" alt="" />
              <div>
                <Rating name="simple-controlled" value={3} readOnly />
                <p className="detail-rating__user--name">
                  Doan thang
                </p>
                <p className="detail-rating__user--date">1/18/2022</p>
              </div>
            </div>
          </div>
          <div className="detail-rating__item--right">
            <div className="detail-rating__comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              iure amet cumque? Nostrum sint vel eveniet itaque, quibusdam
              doloribus neque ad aperiam nisi voluptatum dolor nobis ab, officia
              doloremque consequuntur, necessitatibus expedita odit cum. Autem
              consequatur velit recusandae nam, quos qui omnis harum dolorum
              alias amet? Dignissimos sunt dicta animi!
            </div>
          </div>
        </div>
        <div className="detail-rating__item">
          <div className="detail-rating__item--left">
            <div className="detail-rating__user">
              <img src="/img/products/product-1.jpg" alt="" />
              <div>
                <Rating name="simple-controlled" value={3} readOnly />
                <p className="detail-rating__user--name">
                  Doan thang
                </p>
                <p className="detail-rating__user--date">1/18/2022</p>
              </div>
            </div>
          </div>
          <div className="detail-rating__item--right">
            <div className="detail-rating__comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              iure amet cumque? Nostrum sint vel eveniet itaque, quibusdam
              doloribus neque ad aperiam nisi voluptatum dolor nobis ab, officia
              doloremque consequuntur, necessitatibus expedita odit cum. Autem
              consequatur velit recusandae nam, quos qui omnis harum dolorum
              alias amet? Dignissimos sunt dicta animi!
            </div>
          </div>
        </div>
        <div className="detail-rating__item">
          <div className="detail-rating__item--left">
            <div className="detail-rating__user">
              <img src="/img/products/product-1.jpg" alt="" />
              <div>
                <Rating name="simple-controlled" value={3} readOnly />
                <p className="detail-rating__user--name">
                  Doan thang
                </p>
                <p className="detail-rating__user--date">1/18/2022</p>
              </div>
            </div>
          </div>
          <div className="detail-rating__item--right">
            <div className="detail-rating__comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              iure amet cumque? Nostrum sint vel eveniet itaque, quibusdam
              doloribus neque ad aperiam nisi voluptatum dolor nobis ab, officia
              doloremque consequuntur, necessitatibus expedita odit cum. Autem
              consequatur velit recusandae nam, quos qui omnis harum dolorum
              alias amet? Dignissimos sunt dicta animi!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
