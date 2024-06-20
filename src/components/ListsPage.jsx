import React from "react";

function ListsPage() {
  return (
    <div className="container">
      <div className="list-menu__links">
        <button onclick="window.history.back()" className="tabs-btn">
          &#10094; Назад{" "}
        </button>
        <a href="menu-page.html" className="tabs-btn">
          SALAT and RAW{" "}
        </a>
        <a href="menu-page.html" className="tabs-btn">
          Hot and soup
        </a>
        <a href="menu-page.html" className="tabs-btn">
          Fish and crabs
        </a>
        <a href="menu-page.html" className="tabs-btn">
          Desert{" "}
        </a>
      </div>
      <h3 className="title">Салат и raw</h3>
      <div className="catalog__inner">
        <div className="catalog">
          <a href="menu-mess.html">
            <img className="catalog__img" src="/images/sugar.jpg" alt="" />
          </a>
          <div className="catalog-info">
            <div className="catalog-info__top">
              <h3 className="catalog-info__title">Окунь</h3>
              <span className="catalog-info__sale">650&#8381;</span>
            </div>
            <div className="catalog-info__center">
              <span className="catalog-info__sale">500кк</span>
              <span className="catalog-info__sale">25m</span>
              <span className="catalog-info__sale">300г</span>
            </div>
            <div className="catalog-info__bottom">
              <a href="menu-mess.html" className="catalog-info__link">
                Подробнее
              </a>

              <button
                className="catalog-info__btn btn-stars add-to-cart"
                data-name="Окунь"
                data-price="650"
              >
                <img src="/images/star-bk.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListsPage;
