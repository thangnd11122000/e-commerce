import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BlogCard from "../Blog/BlogCard"
import { useEffect, useState } from "react"
import useAxios from "../../hook/useAxios"
import { PuffLoader } from "react-spinners"

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
  const [posts, setPosts] = useState([])

  const { response, loading, error } = useAxios({ url: "/posts" })

  error && console.log(error.message)

  useEffect(() => {
    if (response !== null) {
      setPosts(response)
    }
  }, [response])

  return (
    <div className="post-list">
      <div className="home__header">
        <h3>Bài viết gần đây</h3>
        <span>Xem tất cả</span>
      </div>
      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <Slider {...settings} className="post-list__slider">
          {posts.map((p, i) => (
            <BlogCard key={i} post={p} />
          ))}
        </Slider>
      )}
    </div>
  )
}

export default PostList
