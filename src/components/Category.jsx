import React from "react";
import NavBar from "./NavBar";
import CollectionItem from "./CollectionItem";
import Header from "./Header";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";

function Category() {
  return (
    <div className="">
      <Header />
      <div className="container">
        <BannerSlider />
        <NavBar />
        <h3 className="title">Основное меню</h3>
        <section className="collections-app">
          <div className="collections-app__items">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
