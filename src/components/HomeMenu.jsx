import React from "react";
import MenuItem from "./MenuItem";
import Header from "./Header";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";

function HomeMenu() {
  return (
    <div>
      <Header />
      <div className="container">
        <BannerSlider />
        <div className="menu-items">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeMenu;
