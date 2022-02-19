const BlogTagAside = ({ title, tags }) => {
  return (
    <div className="blog-aside">
      <h3>{title}</h3>
      <div className="blog-aside__button">
        {tags?.map((tag, index) => (
          <a href={tag.link} key={index} className="btn-primary">
            {tag.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default BlogTagAside
