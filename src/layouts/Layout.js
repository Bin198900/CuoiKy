import React from "react";
import { Outlet } from "react-router-dom";
import "../css/layout.css";

import MenuTop from "./MenuTop";
import MenuBox from "./MenuBox";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="layout">
      <MenuTop />
      <div className="layout-body">
        <MenuBox />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
