import React from "react";

const BakeryItem = ({ name, description, picture, price, addToCart }) => (
  <div className="BakeryItem">
    <div className="Image">
      <img src={picture} alt={name} />
    </div>
    <div className="Name">{name + ` ($${price})`}</div>
    <div className="Description">{description}</div>
    <div className="Footer">
      <button className="Button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  </div>
);
export default BakeryItem;
