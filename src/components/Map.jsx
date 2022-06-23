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
  LayerGroup,
  Polygon,
  Polyline,
} from "react-leaflet";
// import "leaflet-draw";

import MapA from "./MapA";

import shivapuri from "./shivapuri.json";

const Map = () => {
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);

  const [destLat, setDestLat] = useState(Number);
  const [destLong, setDestLong] = useState(Number);

  return (
    <MapContainer doubleClickZoom={false} zoom={14} center={[lat, long]}>
      <MapA
        coords={{
          lat,
          long,
          setLat,
          setLong,
          destLat,
          destLong,
          setDestLat,
          setDestLong,
        }}
      />
    </MapContainer>
  );
};

export default Map;
