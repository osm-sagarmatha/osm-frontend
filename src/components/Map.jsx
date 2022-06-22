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
// import "leaflet-draw";

import shivapuri from "./shivapuri.json";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = () => {
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);

  const [destLat, setDestLat] = useState(Number);
  const [destLong, setDestLong] = useState(Number);

  const bufRef = useRef(null);

  const map = useRef();

  useEffect(() => {
    const buf1 = buffer(point([destLong, destLat]), 100, {
      units: "meters",
    });

    bufRef.current = buf1;

    let routes = [];
    for (const fture of shivapuri.features) {
      const str = lineString(fture.geometry.coordinates, fture.properties);
      const poly = intersect(lineToPolygon(str), buf1);

      if (poly) {
        routes.push(fture);
      }
    }

    if (routes.length > 0) {
      map.current.eachLayer(function (layer) {
        map.current.removeLayer(layer);
      });
      window.L.geoJSON(routes[0]).addTo(map.current);
    }
  }, [destLat, destLong]);

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

      setLong(85.3815959);
      setLat(27.7830807);

      setDestLong(85.3856463);
      setDestLat(27.7864902);
    }

    getLocation();
  }, [long, lat]);

  return (
    <MapContainer
      ref={map}
      doubleClickZoom={false}
      zoom={14}
      center={[lat, long]}
    >
      <ChangeView center={[lat, long]} zoom={14} />
      <TileLayer url="https://tile.openstreetmap.org/${z}/${x}/${y}.png" />

      <Marker position={[lat, long]}>
        <Popup>Source</Popup>
      </Marker>

      <Marker
        position={[destLat, destLong]}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const { lat, lng } = e.target._latlng;
            setDestLat(lat);
            setDestLong(lng);
          },
        }}
      >
        <Popup>Destination</Popup>
      </Marker>

      {/* <GeoJSON data={shivapuri} /> */}

      {/* <RoutingMachine /> */}
    </MapContainer>
  );
};

export default Map;
