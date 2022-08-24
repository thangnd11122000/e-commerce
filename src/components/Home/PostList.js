import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BlogCard from "../Blog/BlogCard"
import { PuffLoader } from "react-spinners"
import { useAxios } from "../../hook/useAxios"

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const PostList = () => {
  const { response, loading, error } = useAxios({
    url: "/api/blogs?_page=1&_limit=10&_sort=created_at&_order=desc",
  })

  error && console.log(error.message)
  return (
    <div className="post-list">
      <div className="home__header">
        <h3>Bài viết gần đây</h3>
        {/* <span>Xem tất cả</span> */}
      </div>
      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <Slider {...settings} className="post-list__slider">
          {Array.isArray(response.data.data) &&
            response.data.data.map((post) => (
              <BlogCard key={post.id} post={post} titleSubstring={72} />
            ))}
        </Slider>
      )}
    </div>
  )
}

export default PostList
