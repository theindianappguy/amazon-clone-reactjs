import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ProductH.css";

function Product({ title, image, price, rating, desc, noOfPeopleRated }) {
  const element = (
    <FontAwesomeIcon
      style={{ height: "13px", width: "13px" }}
      className="star__icon"
      icon={faStar}
      color={"#ffbe00"}
    />
  );

  //   we will pass the rating in int and return stars
  function getStartRating(rating) {
    if (rating === 1) {
      return { element };
    } else if (rating === 2) {
      return (
        <>
          {element} {element}
        </>
      );
    } else if (rating === 3) {
      return (
        <>
          {element} {element} {element}
        </>
      );
    } else if (rating === 4) {
      return (
        <>
          {element} {element} {element} {element}
        </>
      );
    } else if (rating === 5) {
      return (
        <>
          {element} {element} {element} {element} {element}
        </>
      );
    }
  }

  function getTitleString(string) {
    if (string.length > 60) {
      return `${string.substr(0, 60)}....`;
    } else {
      return string;
    }
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{getTitleString(title)}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="product__price">
            <small>Rs </small>
            {price}
          </p>
          <div style={{ marginLeft: "10px" }} class="product__rating">
            {getStartRating(rating)} <p>{noOfPeopleRated} ratings</p>
          </div>
        </div>
      </div>
      <div className="product__description">
        <img src={image} height={"200px"} alt={title} />
        <div style={{ marginLeft: "16px", fontSize: "13px" }}>
          <p>{desc}</p>
          <button className="product__button" style={{ marginTop: "16px" }}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
