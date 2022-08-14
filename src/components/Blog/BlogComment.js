import { Fragment } from "react"
import { formatDate } from "../../utils";
import BlogForm from "./BlogForm"

const BlogComment = ({ blog_id,comments }) => {
  const formToggle = (e) => {
    e.target.classList.toggle("active")
  }
  const handleClick = (e) => {
    e.target.parentNode.parentNode.previousSibling.classList.remove("active")
  }
  console.log(blog_id);
  return (
    <div className="blog-comment">
      <h3>{comments?.length || 0} bình luận</h3>
      <BlogForm blog_id={blog_id} showButton={false} />
      <div className="blog-comment__item">
        {comments?.map((c) => (
          <Fragment key={c.id}>
            <div className="blog-comment__main">
              <div className="blog-comment__content">
                <img src={c.avatar} alt="" />
                <div>
                  <h5>
                    {c.fullname} - <span>{formatDate(c.created_at)}</span>
                  </h5>
                  <p>{c.content}</p>
                  <button onClick={formToggle}>Trả lời</button>
                  <BlogForm blog_id={blog_id} handleClick={handleClick} />
                </div>
              </div>
            </div>
            {c.reply?.map((r, i) => (
              <div key={i} className="blog-comment__main blog-comment__reply">
                <div className="blog-comment__content">
                  <img src={r.avatar} alt="" />
                  <div>
                    <h5>
                      {r.name} - <span>{r.date}</span>
                    </h5>
                    <p>{r.comment}</p>
                    <button onClick={formToggle}>Trả lời</button>
                    <BlogForm blog_id={blog_id} handleClick={handleClick} />
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default BlogComment
