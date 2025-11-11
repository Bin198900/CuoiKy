import React from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Áo thun trắng",
      price: "250.000đ",
      img: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Quần jean xanh",
      price: "400.000đ",
      img: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Váy hoa",
      price: "350.000đ",
      img: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Áo khoác da",
      price: "600.000đ",
      img: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="home">
      <h1>Chào mừng đến với Fashion Store</h1>
      <p>Khám phá bộ sưu tập mới nhất của chúng tôi!</p>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h4>{p.name}</h4>
            <p>{p.price}</p>
            <button>Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
}
