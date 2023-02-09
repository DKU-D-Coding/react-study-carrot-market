import React from "react";

const HomeRecent = () => {
  return (
    <>
      <div className="home__recent__products">
        <img className="recent__product" src="../public/img/S22.png"></img>
        <div className="recent__product__info">
          <span className="recent__product__name">Samsung s22</span>
          <span className="recent__product__price title">$50</span>
        </div>
        <div className="recent__product__cart">
          <i class="bx bxs-cart-alt"></i>
        </div>
      </div>
      <div className="home__recent__products">
        <img className="recent__product" src="../public/img/ipad7g.jpg"></img>
        <div className="recent__product__info">
          <span className="recent__product__name">iPad</span>
          <span className="recent__product__price title">$60</span>
        </div>
        <div className="recent__product__cart">
          <i class="bx bxs-cart-alt"></i>
        </div>
      </div>
    </>
  );
};

export default HomeRecent;
