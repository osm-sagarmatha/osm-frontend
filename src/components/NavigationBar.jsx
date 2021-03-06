import React from "react";
import {
  faHouse,
  faUser,
  faHeart,
  faComments,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

import BottomNavLink from "./BottomNavLink";

const NavigationBar = () => {
  const location = useLocation();

  return location.pathname.startsWith("/map") ? null : (
    // <!-- component -->
    <div className="w-full">
      <section
        id="bottom-navigation"
        className="md:w-96 w-full mx-auto fixed inset-x-0 bottom-0 z-[999] bg-white shadow"
      >
        <div id="tabs" className="flex justify-between">
          <BottomNavLink link="/" icon={faHouse} />
          <BottomNavLink link="/activities" icon={faHeart} />
          <BottomNavLink link="/explore" icon={faCompass} />
          <BottomNavLink link="/community" icon={faComments} />
          <BottomNavLink link="/profile" icon={faUser} />
        </div>
      </section>
    </div>
  );
};

export default NavigationBar;
