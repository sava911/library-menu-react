import React from "react";
import NavBar from "./NavBar";
import CatalogItem from "./CatalogItem";
import Header from "./Header";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";

function ListsPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <BannerSlider />
        <NavBar />
        <div className="title__inner">
          <h3 className="title">Салат и raw</h3>

          <img
            src="/images/sort.svg"
            alt="Острое"
            className="page__icons-btn"
          />
        </div>
        <div className="catalog__inner">
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListsPage;
