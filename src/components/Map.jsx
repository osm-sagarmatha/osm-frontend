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

  console.log("Map");
  return (
    <MapContainer doubleClickZoom={false} zoom={14} center={[lat, long]}>
      <ChangeView center={[lat, long]} zoom={14} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
