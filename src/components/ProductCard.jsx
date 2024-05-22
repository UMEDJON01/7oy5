import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../redux/actions";

const ProductCard = () => {
  const quantity = useSelector((state) => state.quantity);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity());
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity());
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2>SNEAKERS COMPANY</h2>
      <img src="./src/assets/images/image-product-1-thumbnail.jpg" alt="" />
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>$125.00</span>
        <span style={{ textDecoration: "line-through", marginLeft: "10px" }}>
          $250.00
        </span>
        <span style={{ color: "orange", marginLeft: "10px" }}>50% OFF</span>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Color options:</h3>
        <ul>
          <li>Beige</li>
          <li>White</li>
          <li>Brown</li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Size options:</h3>
        <ul>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
        </ul>
      </div>
      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <button
          onClick={handleDecrease}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          -
        </button>
        <span style={{ margin: "0 20px", fontSize: "16px" }}>{quantity}</span>
        <button
          onClick={handleIncrease}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          +
        </button>
      </div>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "orange",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
