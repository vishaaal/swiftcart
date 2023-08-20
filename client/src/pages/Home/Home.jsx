import Categories from "../../components/Categories.jsx/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
