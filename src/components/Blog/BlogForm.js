import { Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import avatar from "../../assets/img/common/user.png"
import { useDispatch } from "react-redux"
import { showNotify } from "../../store/notifySlice"
import LazyLoad from "react-lazyload"

const BlogForm = ({ blogId, getComments }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    axios("/api/blogs-comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      data: {
        blog_id: blogId,
        customer_id: user?.id,
        content: value,
      },
    })
      .then(() => {
        setValue("")
        dispatch(
          showNotify({
            isOpen: true,
            message: "Thêm bình luận thành công",
            type: "success",
          })
        )
      })
      .then(() => getComments())
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
            <LazyLoad>
              <img src={user?.avatar || avatar} alt="avatar" />
            </LazyLoad>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="blog-form__button">
            <Button variant="contained" onClick={handleSubmit}>
              Bình luận
            </Button>
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
