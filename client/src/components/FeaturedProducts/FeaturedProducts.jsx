import React from "react";
import Card from "../Card/Card";
import "./FeaturedProucts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Featured Selections: Discover our curated collection of the week's
          most sought-after fashion pieces. From timeless classics to the latest
          trends, these standout items are a testament to impeccable taste and
          craftsmanship. Elevate your wardrobe with SwiftCraft's finest!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
