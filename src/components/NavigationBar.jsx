import React from "react";
import {
  faHouse,
  faUser,
  faHeart,
  faComments,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

import BottomNavLink from "./BottomNavLink";

const NavigationBar = () => {
  return (
    // <!-- component -->
    <div className="w-full">
      <section
        id="bottom-navigation"
        className="md:w-96 w-full mx-auto fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" className="flex justify-between">
          <BottomNavLink link="/" icon={faHouse} />
          <BottomNavLink link="/activities" icon={faHeart} />
          <BottomNavLink link="/explore" icon={faCompass} />
          <BottomNavLink link="/chat" icon={faComments} />
          <BottomNavLink link="/profile" icon={faUser} />
        </div>
      </section>
    </div>
  );
};

export default NavigationBar;
