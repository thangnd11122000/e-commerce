import { Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import Notification from "../Notification"

const BlogForm = ({ blog_id, showButton = true, handleClick }) => {
  const { user } = useSelector((state) => state.auth)
  const [comment, setComment] = useState("")
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  })
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
        setNotify({
          isOpen: true,
          message: "Thêm bình luận thành công",
          type: "success",
        })
      })
      .catch(() =>
        setNotify({
          isOpen: true,
          message: "Thêm bình luận thất bại",
          type: "error",
        })
      )
  }

  return (
    <form className="blog-form">
      {Notification({ notify, setNotify })}
      {user ? (
        <>
          <div className="blog-form__content">
            <img src={user.avatar} alt="avatar" />
            <textarea
              name=""
              id=""
              defaultValue={""}
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
        <h3>Đăng nhập để bình luận</h3>
      )}
    </form>
  )
}

export default BlogForm
