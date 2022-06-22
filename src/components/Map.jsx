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
        navigator.geolocation.getCurrentPosition(showPosition, null, {
          enableHighAccuracy: true,
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      console.log(lat, long);
    }

    getLocation();
  }, [long, lat]);

  return (
    <MapContainer doubleClickZoom={false} zoom={14} center={[lat, long]}>
      <ChangeView center={[lat, long]} zoom={14} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <RoutingMachine />
    </MapContainer>
  );
};

export default Map;
