import React from "react";

function BannerApp() {
  return (
    <div className="container">
      <div className="banner-logo">
        <div className="banner-logo__inner">
          <img src="/images/sticker.webp" width="150px" alt="banner logo" />
        </div>
        <h1 className="banner-logo__title">Библиотека меню</h1>
      </div>
      <div className="fancy">
        <input type="text" placeholder="Введите название ресторана или кафе" />
      </div>
      <p className="banner-logo__text">
        Библиотека Меню — это удобное приложение и сайт, где каждый может
        ознакомиться с меню различных ресторанов, кафе и баров.
      </p>
    </div>
  );
}

export default BannerApp;
