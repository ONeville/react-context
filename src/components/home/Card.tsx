import React from "react";

export const Card = ({ props }: any) => {
  // image, beds, baths, title, price, rating

  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  );
};
