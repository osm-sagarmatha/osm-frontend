import React from "react";
const Card = ({ img }) => {
  return (
    <div className="flex justify-center">
      <div className="story-item relative hover:scale-110 cursor-pointer transition duration-200 ease-in-out">
        <img src={img} className="rounded-xl w-40" />
      </div>
    </div>
  );
};

export default Card;
