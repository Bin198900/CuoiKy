import React from "react";
import "../css/MenuBox.css";

export default function MenuBox() {
  return (
    <aside className="menu-box">
      <h3>Danh mục sản phẩm</h3>
      <ul>
        <li>Áo thun</li>
        <li>Quần jean</li>
        <li>Váy</li>
        <li>Phụ kiện</li>
      </ul>
    </aside>
  );
}
