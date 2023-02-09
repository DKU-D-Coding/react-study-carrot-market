import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img
          src="../public/img/logo.png "
          className="header__logo"
          alt="logo"
        />
      </Link>

      <div className=" header__middle">
        <Link to="/products">중고거래</Link>
        <Link to="/products">동네가게</Link>
        <Link to="/users/upload">당근 팔기</Link>
      </div>
      <div className=" header__right">
        <i className="bx bx-search-alt-2 header__search"></i>
        <Link to="/cart">
          <i class="bx bxs-cart-alt header__cart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
