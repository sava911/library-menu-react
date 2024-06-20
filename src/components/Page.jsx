import React from "react";

function Page() {
  return (
    <div>
      {" "}
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
        <h3 className="title">Сибас</h3>
        <div className="page__icons">
          <img
            src="/images/spyce.svg"
            alt="Острое"
            className="page__icons-btn"
          />
          <img src="/images/raw.svg" alt="Сырое" className="page__icons-btn" />
          <img src="/images/luk.svg" alt="Лук" className="page__icons-btn" />
        </div>
        <p className="page__text">
          Промойте рыбу, удалите внутренности и обсушите сибаса чистым
          полотенцем. Вымойте лимон и розмарин. Разрежьте лимон пополам: из
          одной половинки выжмите сок, другую нарежьте колечками..
        </p>
      </div>
      <section className="tabel-info">
        <div className="container">
          <div className="tabel-info__inner">
            <div className="tabel-info__item">
              <b>200</b>
              <span>Калорий</span>
            </div>
            <div className="tabel-info__item">
              <b>25</b>
              <span>Минут</span>
            </div>
            <div className="tabel-info__item">
              <b>100</b>
              <span>грамм</span>
            </div>
            <div className="tabel-info__item">
              <b>1600</b>
              <span>рублей</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
