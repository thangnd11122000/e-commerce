import { Star } from "@mui/icons-material"
import Rating from "@mui/material/Rating"
import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import usePagination from "../Pagination/Pagination"
import { Pagination } from "@mui/material"

const override = css`
  display: block;
  margin: 50px auto;
`
const Review = ({ ratings }) => {
  const [totalRatings, setTotalRatings] = useState(0)
  const [ratingsFilter, setRatingsFilter] = useState(ratings)

  const [isResetPage, setIsResetPage] = useState(false)

  let [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(2)
  const count = Math.ceil(ratingsFilter.length / perPage)
  const _DATA = usePagination(ratingsFilter, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const handleClick = (value) => {
    setIsResetPage(true)
    if (value === 0) {
      setRatingsFilter(ratings)
      return
    } else {
      let temp = ratings.filter((r) => r.rating === value)
      setRatingsFilter(temp)
    }
  }

  const getRating = (value) => {
    let temp = ratings.filter((r) => r.rating === value)
    return temp.length
  }

  useEffect(() => {
    let temp = ratings.reduce((sum, rating) => sum + rating.rating, 0)
    setTotalRatings(temp / ratings.length)
  }, [ratings])

  useEffect(() => {
    if (isResetPage) {
      setPage(1)
      _DATA.reset()
    }
    setIsResetPage(false)
  }, [_DATA, isResetPage, setIsResetPage])

  return (
    <div className="detail-review">
      {totalRatings ? (
        <>
          <h3 className="detail-review__title">Đánh giá sản phẩm</h3>
          <div className="detail-rating">
            <div className="detail-rating__overview">
              <p>{totalRatings.toFixed(2)}</p>
              <Star />
            </div>
            <div className="detail-rating__filter">
              {[...Array(6)].map((arr, index) => (
                <button
                  key={index}
                  className="btn-secondary"
                  onClick={() => handleClick(index)}
                >
                  {index === 0
                    ? "Tất cả"
                    : `${index} sao (${getRating(index)})`}
                </button>
              ))}
            </div>
          </div>
          <div className="detail-rating__list">
            {_DATA.currentData().length ? (
              _DATA.currentData().map((r, i) => (
                <div key={i} className="detail-rating__item">
                  <div className="detail-rating__item--left">
                    <div className="detail-rating__user">
                      <img src={r.customer.avatar} alt="" />
                      <div>
                        <Rating
                          name="simple-controlled"
                          value={r.rating}
                          readOnly
                        />
                        <p className="detail-rating__user--name">
                          {r.customer.name}
                        </p>
                        <p className="detail-rating__user--date">{r.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="detail-rating__item--right">
                    <div className="detail-rating__comment">{r.comment}</div>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="detail-rating__list--empty">Không có bình luận</h3>
            )}
            {_DATA.currentData().length > 0 ? (
              <Pagination
                className="pagination"
                count={count}
                size="medium"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
                // onClick={handleMoveClick}
              />
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <h3 style={{ textAlign: "center" }}>Chưa có đánh giá</h3>
      )}
    </div>
  )
}

export default Review
