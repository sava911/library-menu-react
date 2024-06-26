import React from "react";

function CollectionItem() {
  return (
    <a href="lists.html" className="collections-app__item">
      <img src="/images/raw.jpg" alt="" />
      <div className="collections-app__item-inner">
        <h3 className="collections-app__item-title">SALAT and RAW</h3>
        <p className="collections-app__item-text">12 наименований</p>
      </div>
    </a>
  );
}

export default CollectionItem;
