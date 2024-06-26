import React from "react";

function NavBar() {
  return (
    <div className="list-menu__links">
      <button onClick="window.history.back()" className="tabs-btn">
        &#10094; Назад
      </button>
      <a href="lists.html" className="tabs-btn">
        SALAT and RAW
      </a>
      <a href="lists.html" className="tabs-btn">
        Hot and soup
      </a>
      <a href="lists.html" className="tabs-btn">
        Fish and crabs
      </a>
      <a href="lists.html" className="tabs-btn">
        Desert
      </a>
    </div>
  );
}

export default NavBar;
