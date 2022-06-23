import React from "react";
import Map from "../components/Map";
import hiking from "../images/hiking.png";
const Hiking = () => {
  return (
    <div className="md:py-5 py-10  mx-auto md:bg-white md:w-96 flex flex-col">
      <img src={hiking} alt="" className="w-80 mx-auto " />
      <div className="w-50">
        <Map />
      </div>
    </div>
  );
};

export default Hiking;
