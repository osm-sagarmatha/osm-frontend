import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityCheckbox = ({ checked, onClick, name, icon }) => {
  return (
    <div
      onClick={onClick}
      className="group mx-1 w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500  border-gray flex flex-col mb-5 items-center justify-center  "
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        className="justify-start absolute left-2 top-3 text-green-500 group-hover:text-green-500 group-hover:bg-green-500"
      />
      <FontAwesomeIcon
        icon={icon}
        className="text-green-500 group-hover:text-white"
        fontSize={40}
      />
      <h3 className="text-sm mt-1 absolute bottom-2">{name}</h3>
    </div>
  );
};

export default ActivityCheckbox;
