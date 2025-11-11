import React from "react";
import "../css/MenuTop.css";

export default function MenuTop() {
  return (
    <header className="menu-top">
      <h2>Fashion Store</h2>
      <ul>
        <li>
          <a href="/">Trang chủ</a>
        </li>
        <li>
          <a href="/products">Sản phẩm</a>
        </li>
        <li>
          <a href="/contact">Liên hệ</a>
        </li>
      </ul>
    </header>
  );
}
