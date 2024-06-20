import React from "react";

function Category() {
  return (
    <div className="container">
      <div className="list-menu__links">
        <button onclick="window.history.back()" className="tabs-btn">
          &#10094; Назад{" "}
        </button>
        <a href="lists.html" className="tabs-btn">
          SALAT and RAW{" "}
        </a>
        <a href="lists.html" className="tabs-btn">
          Hot and soup
        </a>
        <a href="lists.html" className="tabs-btn">
          Fish and crabs
        </a>
        <a href="lists.html" className="tabs-btn">
          Desert{" "}
        </a>
      </div>
      <h3 className="title">Основное меню</h3>
      <section className="collections-app">
        <div className="collections-app__items">
          <a href="lists.html" className="collections-app__item">
            <img src="/images/raw.jpg" alt="" />
            <div className="collections-app__item-inner">
              <h3 className="collections-app__item-title">SALAT and RAW</h3>
              <p className="collections-app__item-text">12 наименований</p>
            </div>
          </a>
          <a href="lists.html" className="collections-app__item">
            <img src="/images/hot.jpg" alt="" />
            <div className="collections-app__item-inner">
              <h3 className="collections-app__item-title">Hot and soup</h3>
              <p className="collections-app__item-text">7 наименований</p>
            </div>
          </a>
          <a className="collections-app__item">
            <img src="/images/fish.jpg" alt="" />
            <div className="collections-app__item-inner">
              <h3 className="collections-app__item-title">Fish and crabs</h3>
              <p className="collections-app__item-text">5 наименований</p>
            </div>
          </a>
          <a className="collections-app__item">
            <img src="/images/sugar.jpg" alt="" />
            <div className="collections-app__item-inner">
              <h3 className="collections-app__item-title">Desert</h3>
              <p className="collections-app__item-text">4 наименований</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Category;
