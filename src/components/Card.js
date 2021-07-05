import React from "react";
import propTypes from "react";
import Image from "next/image";
import Button from "./Buttons";

const Card = ({
  className,
  mealPrice,
  mealName,
  subName,
  mealImg,
  mealDescription,
  mealRatings,
  ...props
}) => {
  return (
    <div className={`meal-card ${className}`} {...props}>
      <div className="img-container">
        <Image src={mealImg} layout="fill" />
      </div>
      <div className="card-body">
        <div className="title">
          <p className="meal-name">{mealName}</p>
          <p className="sub-meal-name">{subName}</p>
          <p className="meal-price">{mealPrice}</p>
        </div>
        <div className="meal-desc">
          <p>{mealDescription}</p>
        </div>
        <div className="card-base">
          <p className="ratings">stars</p>
          <Button>plus</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// Card.propTypes = {
//   mealPrice: propTypes.string,
//   mealName: propTypes.string.isRequired,
//   mealImg: propTypes.node.isRequired,
//   mealDescription: propTypes.string.isRequired,
//   mealRatings: propTypes.node.isRequired,
// };
