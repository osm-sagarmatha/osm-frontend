import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "../ors";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    router: new L.Routing.openrouteserviceV2(
      "5b3ce3597851110001cf6248fde94a42cd234a078def0569f083f0ec",
      { profile: "foot-hiking" }
    ),
    waypoints: [L.latLng(27.7142, 85.3145), L.latLng(27.7142, 85.3185)],
    // lineOptions: {
    //   styles: [{ color: "#6FA1EC", weight: 4 }],
    // },
    urlParameters: {
      profile: "foot-walking",
    },
    showAlternatives: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
