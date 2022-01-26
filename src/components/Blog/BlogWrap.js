const BlogWrap = ({ post }) => {
  const { image, title, date, link } = post
  return (
    <div className="blog__wrap">
      <a href={link}>
        <img src={image} alt="" className="blog__wrap--image" />
      </a>
      <div>
        <a className="blog__wrap--title" href={link}>
          {title.substring(0, 60)}...
        </a>
        <p className="blog__wrap--date">{date}</p>
      </div>
    </div>
  )
}

export default BlogWrap
