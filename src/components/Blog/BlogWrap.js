const BlogWrap = ({ post }) => {
  const { image, title, date, link } = post
  return (
    <div className="blog-wrap">
      <a href={link}>
        <img src={image} alt="" className="blog-wrap__image" />
      </a>
      <div>
        <a className="blog-wrap__title" href={link}>
          {title.substring(0, 60)}...
        </a>
        <p className="blog-wrap__date">{date}</p>
      </div>
    </div>
  )
}

export default BlogWrap
