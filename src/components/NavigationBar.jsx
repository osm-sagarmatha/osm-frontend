import React from "react";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faHeart,
  faComments,
  faGift,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import ButtomNavLink from "./BottomNavLink";

const NavigationBar = () => {
  return (
    // <!-- component -->
    <div className="w-full ">
      <section
        id="bottom-navigation"
        className="md:w-96 w-full mx-auto fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" className="flex justify-between">
          <ButtomNavLink link="/" icon={faHouse} />
          <ButtomNavLink link="/activities" icon={faHeart} />
          <ButtomNavLink link="/chat" icon={faComments} />
          <ButtomNavLink link="/profile" icon={faUser} />
        </div>
      </section>
    </div>
  );
};

export default NavigationBar;
