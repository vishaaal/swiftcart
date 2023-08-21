import React, { useEffect, useState } from "react";
import "./FeaturedProucts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
 

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          natus quam et asperiores consequatur commodi quidem deleniti corporis
          accusamus iste aut, culpa, qui quae voluptate eligendi dolorem itaque?
          Laborum sit, consequuntur tenetur sed porro atque excepturi corrupti
          natus culpa! Facilis.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
