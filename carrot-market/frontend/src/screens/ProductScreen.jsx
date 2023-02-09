import React, { useEffect } from "react";
import HomeProducts from "../components/HomeProducts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { productsDetailsAction } from "../actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(productsDetailsAction(id));
  }, [dispatch, id]);

  const productDetailList = useSelector((state) => state.productDetails);
  const { product } = productDetailList;
  return (
    <div className="product-screen">
      <div className="product-screen__wrap">
        <img
          src={`${product.image}`}
          alt="product-image"
          className="product-screen__img"
        />
        <div className="product-screen__user-info">
          <div className="product-screen__user-info__wrap">
            <i class="bx bxs-user-circle"></i>
            <div className="product-screen__user-info__wrap__more">
              <span className="product-screen__username">User name</span>
              <span className="product-screen__address">address </span>
            </div>
          </div>
        </div>
        <div className="product-screen__paragraph">
          <span className="product-screen__paragraph__product-name">
            {product.name}
          </span>
          <span className="product-screen__paragraph__upload-date-category">
            {product.category}
            <i class="bx bxs-circle"></i>4일전
          </span>
          <span className="product-screen__paragraph__product-price">
            {product.price}원
          </span>
          <span className="product-screen__paragraph__product-description">
            {product.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
