import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">r1</div>
        <div className="row">r2</div>
      </div>
      <div className="col">
        <div className="row">r3</div>
      </div>
      <div className="col-l"></div>
      <div className="row">
        <div className="col">
            <div className="row">r4</div>
        </div>
        <div className="col">
            <div className="row">r5</div>
        </div>
      </div>
      <div className="row">r6</div>

    </div>
  );
};

export default Categories;
