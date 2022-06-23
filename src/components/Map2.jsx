import {
  buffer,
  point,
  lineString,
  intersect,
  lineIntersect,
  lineToPolygon,
} from "@turf/turf";
import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import DraggableMarker from "./DraggableMarker";
import useLocation from "./hook/useLocation";
import RoutingMachine from "./RoutingMachine";
// import "leaflet-draw";
import createGpx from "gps-to-gpx";

import shivapuri from "./shivapuri.json";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map2 = () => {
  const [long, lat] = useLocation();

  const [destLat, setDestLat] = useState(Number);
  const [destLong, setDestLong] = useState(Number);

  const map = useRef();

  return (
    <MapContainer
      ref={map}
      doubleClickZoom={false}
      zoom={14}
      center={[lat, long]}
    >
      <ChangeView center={[lat, long]} zoom={14} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[lat, long]}>
        <Popup>
          Lat={lat},Long={long}
        </Popup>
      </Marker>
      {/* <RoutingMachine /> */}
    </MapContainer>
  );
};

export default Map2;
