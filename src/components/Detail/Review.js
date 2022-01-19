import { Star } from "@mui/icons-material"
import React from "react"

import Rating from "@mui/material/Rating"

const Review = () => {
  return (
    <div className="detail__review">
      <h3 className="detail__review--title">Đánh giá sản phẩm</h3>
      <div className="detail__rating">
        <div className="detail__rating--overview">
          <p>4.5</p>
          <Star />
        </div>
        <div className="detail__rating--filter">
          <button className="btn-secondary">Tất cả</button>
          <button className="btn-secondary">5 sao (0)</button>
          <button className="btn-secondary">4 sao (0)</button>
          <button className="btn-secondary">3 sao (0)</button>
          <button className="btn-secondary">2 sao (0)</button>
          <button className="btn-secondary">1 sao (0)</button>
        </div>
      </div>
      <div className="detail__list">
        <div className="detail__list--box">
          <div className="detail__list--left">
            <div className="detail__user">
              <img src="/img/products/product-1.jpg" alt="" />
              <div>
                <p className="detail__user--name">Doan than111111 11111111111g</p>
                <p className="detail__user--date">1/18/2022</p>
              </div>
            </div>

            <Rating name="simple-controlled" value={5} />
          </div>
          <div className="detail__list--right">
            <div className="detail__comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              iure amet cumque? Nostrum sint vel eveniet itaque, quibusdam
              doloribus neque ad aperiam nisi voluptatum dolor nobis ab, officia
              doloremque consequuntur, necessitatibus expedita odit cum. Autem
              consequatur velit recusandae nam, quos qui omnis harum dolorum
              alias amet? Dignissimos sunt dicta animi!
            </div>
          </div>
        </div>
        <div className="detail__list--box">
          <div className="detail__list--left">
            <div className="detail__user">
              <img src="/img/products/product-1.jpg" alt="" />
              <div>
                <p className="detail__user--name">Doan thang</p>
                <p className="detail__user--date">1/18/2022</p>
              </div>
            </div>

            <Rating name="simple-controlled" value={5} />
          </div>
          <div className="detail__list--right">
            <div className="detail__comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              iure amet cumque? Nostrum sint vel eveniet itaque, quibusdam
              doloribus neque ad aperiam nisi voluptatum dolor nobis ab, officia
              doloremque consequuntur, necessitatibus expedita odit cum. Autem
              consequatur velit recusandae nam, quos qui omnis harum dolorum
              alias amet? Dignissimos sunt dicta animi!
            </div>
          </div>
        </div>
        <div className="detail__list--box">
          <div className="detail__list--left">
            <div className="detail__user">
              <img src="/img/products/product-1.jpg" alt="" />
              <div>
                <p className="detail__user--name">Doan thang</p>
                <p className="detail__user--date">1/18/2022</p>
              </div>
            </div>

            <Rating name="simple-controlled" value={5} />
          </div>
          <div className="detail__list--right">
            <div className="detail__comment">
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
