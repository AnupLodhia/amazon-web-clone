import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarRatings from "react-star-ratings";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <StarRatings
            className="product__stars"
            rating={rating}
            starDimension="23px"
            starRatedColor="#FFDF00"
            numberOfStars={5}
            name="rating"
          />
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))} */}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
