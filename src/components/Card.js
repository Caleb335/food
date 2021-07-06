import React from "react";
import Image from "next/image";
import Button from "./Buttons";
import { FiPlus } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";

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
        <Image
          className="meal-img"
          src={mealImg}
          width={350}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="card-body">
        <div className="title">
          <div className="meal-id">
            <p className="meal-name">{mealName}</p>
            <p className="sub-meal-name">{subName}</p>
          </div>
          <p className="meal-price">{mealPrice}</p>
        </div>
        <div className="meal-desc">
          <p>{mealDescription}</p>
        </div>
      </div>
      <div className="card-base">
        <div className="ratings">
          <ReactStars
            count={mealRatings}
            size={24}
            isHalf={true}
            color="rgb(243, 141, 32)"
          />
        </div>
        <Button>
          <FiPlus />
        </Button>
      </div>
    </div>
  );
};

export default Card;
