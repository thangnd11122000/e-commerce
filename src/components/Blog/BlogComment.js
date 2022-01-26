import BlogForm from "./BlogForm"

const BlogComment = () => {
  const formToggle = (e) => {
    e.target.classList.toggle("active")
  }
  const handleClick = (e) => {
    e.target.parentNode.parentNode.previousSibling.classList.remove("active")
  }

  return (
    <div className="blog__comment">
      <h3>2 bình luận</h3>
      <BlogForm showButton={false} />
      <div className="blog__comment--box">
        <div className="blog__comment--main">
          <div className="blog__comment--content">
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
        <div className="blog__comment--main blog__comment--reply">
          <div className="blog__comment--content">
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
        <div className="blog__comment--main blog__comment--reply">
          <div className="blog__comment--content">
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
