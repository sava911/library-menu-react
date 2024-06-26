import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div className="logo__inner">
            <a href="index.html" className="logo">
              <b className="logo__name">Rico</b>

              <p className="logo__text">Ружейный пер., д.6, стр.2</p>
            </a>

            <a href="app.html" className="logo-mole">
              <div className="logo-mole__inner">
                <img src="/images/mole.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
