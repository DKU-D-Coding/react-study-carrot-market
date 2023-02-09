import React from "react";
import { Link } from "react-router-dom";

const HomeProducts = ({ product }) => {
  return (
    <div className="home__products">
      <Link to={`product/${product.id}`} className="home__products__link">
        <div
          className="home__product__img"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>

        <div className="home__product__wrap">
          <span className="home__product__name">{product.name}</span>

          <div className="home__product__info">
            <span className="home__product__info__price">{product.price}</span>

            <span className="home__product__info__brand">{product.brand}</span>
          </div>
          <span className="home__product__address">경기도 용인시 수지구 </span>
        </div>
      </Link>
    </div>
  );
};

export default HomeProducts;
