import React from "react"
import MiddleBanner from "../components/Home/MiddleBanner"
import TopBanner from "../components/Home/TopBanner"
import CategoryPopular from "../components/Home/CategoryPopular"
import FlashSale from "../components/Home/FlashSale"
import FeaturedProducts from "../components/Home/FeaturedProducts"
import NewProducts from "../components/Home/NewProducts"
import PostList from "../components/Home/PostList"
import Policy from "../components/Home/Policy"
const Home = () => {
  return (
    <div className="home">
      <TopBanner />
      <FlashSale />
      <CategoryPopular />
      <NewProducts />
      <MiddleBanner />
      <FeaturedProducts />
      <Policy />
      <PostList />
    </div>
  )
}

export default Home
