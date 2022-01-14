import React from "react";
import MiddleBanner from "../components/Home/MiddleBanner";
import TopBanner from "../components/Home/TopBanner";
import CategoryPopular from "../components/Home/CategoryPopular";
import FlashSale from "../components/Home/FlashSale";
import RecommendedProducts from "../components/Home/RecommendedProducts";
import SellingProducts from "../components/Home/SellingProducts";
import PostList from "../components/Home/PostList";
import Policy from "../components/Home/Policy";
const Home = () => {
  return (
    <div className="home">
      <TopBanner />
      <FlashSale />
      <CategoryPopular />
      <SellingProducts />
      <MiddleBanner />
      <RecommendedProducts />
      <Policy />
      <PostList />
    </div>
  );
};

export default Home;
