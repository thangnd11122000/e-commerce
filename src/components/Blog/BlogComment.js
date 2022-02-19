import BlogForm from "./BlogForm"

const BlogComment = () => {
  const formToggle = (e) => {
    e.target.classList.toggle("active")
  }
  const handleClick = (e) => {
    e.target.parentNode.parentNode.previousSibling.classList.remove("active")
  }

  return (
    <div className="blog-comment">
      <h3>2 bình luận</h3>
      <BlogForm showButton={false} />
      <div className="blog-comment__item">
        <div className="blog-comment__main">
          <div className="blog-comment__content">
            <img src="/img/about/testimonial-1.jpg" alt="" />
            <div>
              <h5>
                Tấn Lộc - <span>3 ngày trước</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quo nostrum. Error iste facere tempora consequatur
                odit tempore iure earum soluta dolorum voluptatibus eaque minus
                iusto quae, in voluptatum provident.
              </p>
              <button onClick={formToggle}>Trả lời</button>
              <BlogForm handleClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="blog-comment__main blog-comment__reply">
          <div className="blog-comment__content">
            <img src="/img/about/testimonial-1.jpg" alt="" />
            <div>
              <h5>
                Tấn Lộc - <span>3 ngày trước</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quo nostrum. Error iste facere tempora consequatur
                odit tempore iure earum soluta dolorum voluptatibus eaque minus
                iusto quae, in voluptatum provident.
              </p>
              <button onClick={formToggle}>Trả lời</button>
              <BlogForm handleClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="blog-comment__main blog-comment__reply">
          <div className="blog-comment__content">
            <img src="/img/about/testimonial-1.jpg" alt="" />
            <div>
              <h5>
                Tấn Lộc - <span>3 ngày trước</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quo nostrum. Error iste facere tempora consequatur
                odit tempore iure earum soluta dolorum voluptatibus eaque minus
                iusto quae, in voluptatum provident.
              </p>
              <button>Trả lời</button>
            </div>
          </div>
          <BlogForm />
        </div>
      </div>
    </div>
  )
}

export default BlogComment
