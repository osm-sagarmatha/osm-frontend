import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavLink = ({ icon, link }) => {
  return (
    <NavLink
      to={link}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "white" : "",
          color: isActive ? "green" : "",
        };
      }}
      className={({ isActive }) =>
        `w-full hover:text-green-500 justify-center text-center pt-3 pb-3 ${
          isActive ? "bottom-nav-link" : ""
        }`
      }
    >
      <FontAwesomeIcon
        icon={icon}
        fontSize={25}
        className="text-gray-400 hover:text-green-500 bottom-nav-link-svg"
      />
    </NavLink>
  );
};

export default BottomNavLink;
