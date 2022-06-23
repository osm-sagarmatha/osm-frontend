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
    waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
    // lineOptions: {
    //   styles: [{ color: "#6FA1EC", weight: 4 }],
    // },
    urlParameters: {
      profile: "foot-hiking",
    },
    showAlternatives: true,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
