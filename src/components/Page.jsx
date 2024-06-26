import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import BannerSlider from "./BannerSlider";
import PageIcon from "./PageIcon";
import PageTable from "./PageTable";

function Page() {
  return (
    <div>
      <Header />
      <div className="container">
        <BannerSlider />
        <NavBar />
        <h3 className="title">Сибас</h3>
        <div className="page__icons">
          <PageIcon />
          <PageIcon />
          <PageIcon />
        </div>
        <p className="page__text">
          Промойте рыбу, удалите внутренности и обсушите сибаса чистым
          полотенцем. Вымойте лимон и розмарин. Разрежьте лимон пополам: из
          одной половинки выжмите сок, другую нарежьте колечками..
        </p>
      </div>
      <PageTable />
    </div>
  );
}

export default Page;
