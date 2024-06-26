import React from "react";

function PageTable() {
  return (
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
  );
}

export default PageTable;
