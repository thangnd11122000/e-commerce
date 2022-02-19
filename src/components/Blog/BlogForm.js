import { Button } from "@mui/material"

const BlogForm = ({ showButton = true, handleClick }) => {
  return (
    <form className="blog-form">
      <div className="blog-form__content">
        <img src="/img/about/testimonial-1.jpg" alt="" />
        <textarea name="" id="" defaultValue={""} />
      </div>
      <div className="blog-form__button">
        {showButton && (
          <Button variant="contained" onClick={handleClick} sx={{ mr: 1 }}>
            Hủy
          </Button>
        )}
        <Button variant="contained">Bình luận</Button>
      </div>
    </form>
  )
}

export default BlogForm
