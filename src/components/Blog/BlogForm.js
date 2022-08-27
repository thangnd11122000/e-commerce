import { Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import avatar from "../../assets/img/common/user.png"
import { useDispatch } from "react-redux"
import { showNotify } from "../../store/notifySlice"

const BlogForm = ({ blog_id, showButton = true, handleClick }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    axios("/api/blogs-comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      data: {
        blog_id: blog_id,
        customer_id: user?.id,
        content: comment,
      },
    })
      .then(() => {
        setComment("")
        dispatch(
          showNotify({
            isOpen: true,
            message: "Thêm bình luận thành công",
            type: "success",
          })
        )
      })
      .catch(() =>
        showNotify({
          isOpen: true,
          message: "Thêm bình luận thất bại",
          type: "error",
        })
      )
  }

  return (
    <form className="blog-form">
      {user ? (
        <>
          <div className="blog-form__content">
            <img src={user?.avatar || avatar} alt="avatar" />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="blog-form__button">
            {showButton && (
              <Button variant="contained" onClick={handleClick} sx={{ mr: 1 }}>
                Hủy
              </Button>
            )}
            {comment && (
              <Button variant="contained" onClick={handleSubmit}>
                Bình luận
              </Button>
            )}
          </div>
        </>
      ) : (
        <h3>
          Bạn cần đăng nhập để bình luận /
          <Link
            to="/dang-nhap?back=true"
            style={{ color: "#14BCDC", marginLeft: "10px" }}
          >
            Đăng nhập ngay
          </Link>
        </h3>
      )}
    </form>
  )
}

export default BlogForm
