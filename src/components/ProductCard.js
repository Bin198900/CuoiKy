// src/components/ProductCard.js
import React from "react";
import "../css/ProductCard.css"; // Tạo file CSS sau

export default function ProductCard({ product }) {
  const { name, price, image, rating_rate, rating_count, description } =
    product;

  return (
    <div className="product-card">
      <img src={image || "https://via.placeholder.com/200"} alt={name} />
      <h4>{name}</h4>
      <p className="price">{Number(price).toLocaleString("vi-VN")}đ</p>

      <div className="rating">
        <span className="stars">
          {"★".repeat(Math.round(rating_rate))}
          {"☆".repeat(5 - Math.round(rating_rate))}
        </span>
        <span className="rating-text">
          {rating_rate} ({rating_count} đánh giá)
        </span>
      </div>

      <p className="description">{description}</p>
      <button className="buy-btn">Mua ngay</button>
    </div>
  );
}
