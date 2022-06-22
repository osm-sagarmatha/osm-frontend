import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Card = ({ img, icon, size }) => {
  return (
    <div className="flex justify-center">
      <div className="story-item relative hover:scale-110 cursor-pointer transition duration-200 ease-in-out">
        {img && <img src={img} className="rounded-xl w-40" />}
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="bg-gray-300 p-4 rounded-lg text-black"
            fontSize={size}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
