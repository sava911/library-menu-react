import React from "react";

function CatalogItem() {
  return (
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
  );
}

export default CatalogItem;
