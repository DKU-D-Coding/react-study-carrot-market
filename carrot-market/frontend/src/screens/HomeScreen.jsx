import React, { useEffect, useState } from "react";
import HomeProducts from "../components/HomeProducts";
import { useDispatch, useSelector } from "react-redux";

import { productsAction } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  const productList = useSelector((state) => state.productLists);
  const { products } = productList;
  const [toggle, setToggle] = useState("");
  const [category, setCategory] = useState("");
  const categoryClickHandler = (e) => {
    const value = e.target.value;

    let newCategory = [...category];
    const index = newCategory.indexOf(value);

    if (index === -1) {
      newCategory.push(value);
    } else {
      newCategory.splice(index, 1);
    }

    setCategory(newCategory);
  };
  const categorySubmitHandler = (e) => {
    e.preventDefault();
    setToggle(false);
  };
  const handleCheckbox = (e) => {
    setToggle(e.target.checked);
  };
  let filteredProduct;
  if (category.length == 0) {
    filteredProduct = products;
  } else {
    for (let i = 0; i < category.length; i++) {
      filteredProduct = products.filter(
        (product) => product.category === category[i]
      );
    }
  }

  return (
    <div className="home">
      {toggle ? (
        <>
          <span className="home__title">중고거래 카테고리</span>

          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            onChange={(e) => handleCheckbox(e)}
            checked={toggle}
          />
          <div className="home__back-bar">
            <label htmlFor="navi-toggle" className="toggle-button">
              <i class="bx bx-arrow-back"></i>{" "}
            </label>
          </div>
          <div className="home__wrap">
            <div className="home__category">
              <button
                value="디지털기기"
                style={{
                  backgroundColor: category.includes("디지털기기")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
                onClick={categoryClickHandler}
              >
                디지털기기
              </button>
              <button
                value="생활가전"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("생활가전")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                생활가전
              </button>
              <button
                value="가구/인테리어"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("가구/인테리어")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                가구/인테리어
              </button>
              <button
                value="유아도서"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("유아도서")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                유아도서
              </button>

              <button
                value="생활/가공식품"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("생활/가공식품")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                생활/가공식품
              </button>
              <button
                value="여성의류"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("여성의류")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                가구/인테리어
              </button>
              <button
                value="남성패션/잡화"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("남성패션/잡화")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                남성패션/잡화
              </button>
              <button
                value="게임/취미"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("게임/취미")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                게임/취미
              </button>
              <button
                value="뷰티/미용"
                onClick={categoryClickHandler}
                style={{
                  backgroundColor: category.includes("뷰티/미용")
                    ? "rgb(211, 211, 211)"
                    : "",
                }}
              >
                뷰티/미용
              </button>
            </div>
            <form onSubmit={categorySubmitHandler}>
              <button type="submit" className="home__category__submit">
                적용
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <span className="home__title">중고거래 인기매물</span>
          <div className="home__select-bar">지역을 선택하세요</div>{" "}
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            onChange={(e) => handleCheckbox(e)}
          />
          <div className="home__select-bar">
            <label htmlFor="navi-toggle" className="toggle-button">
              <i class="bx bxs-purchase-tag"></i>Select tag
            </label>
          </div>
          <div className="home__wrap">
            {filteredProduct &&
              filteredProduct.map((product) => {
                return (
                  <>
                    <HomeProducts key={product.id} product={product} />
                  </>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
