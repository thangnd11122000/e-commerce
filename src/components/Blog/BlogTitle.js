const BlogTitle = ({ link, title }) => {
  return (
    <div className="blog__title">
      <a href={link} className="blog__title--main">{title}</a>
      <a href={link} className="blog__title--action">Xem tất cả</a>
    </div>
  )
}

export default BlogTitle
