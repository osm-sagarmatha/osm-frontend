import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = () => {
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("long", long);
      console.log("lat", lat);
    }
    getLocation();
    console.log("Afterv long", long);
    console.log("After lat", lat);
  }, [long, lat]);
  const Api_key = "587c6067-253b-4f29-8010-f41c66aaeffa";
  const test = fetch(
    `https://graphhopper.com/api/1/route?point=51.131,12.414&point=48.224,3.867&profile=car&locale=de&calc_points=false&key=${Api_key}`,
    { headers: { "Content-type": "application/json" } }
  ).then((res) => res.json());

  test.then((res) => console.log(res));
  console.log("Map");
  return (
    <MapContainer doubleClickZoom={false} zoom={14} center={[lat, long]}>
      <ChangeView center={[lat, long]} zoom={14} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/* <RoutingMachine /> */}
    </MapContainer>
  );
};

export default Map;
