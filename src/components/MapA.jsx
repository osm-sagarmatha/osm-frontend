import React, { useEffect, useState, useMemo, useRef } from "react";
import { TileLayer, useMap, Marker, Popup, GeoJSON } from "react-leaflet";

import shivapuri from "./shivapuri.json";
import bufferFeatureIntersection from "../utils/buffer-feature-intersection";

const MapA = ({ coords }) => {
  const map = useMap();
  const [routes, setRoutes] = useState([]);

  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const { lat, lng } = marker.getLatLng();
          coords.setDestLat(lat);
          coords.setDestLong(lng);
        }
      },
    }),
    []
  );

  useEffect(() => {
    const routes = bufferFeatureIntersection(coords, shivapuri);
    const route = routes[0];

    if (route) setRoutes(route);
    else setRoutes([]);
  }, [coords.destLat, coords.destLong]);

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
      //   coords.setLat(position.coords.latitude);
      //   coords.setLong(position.coords.longitude);

      map.setView([coords.lat, coords.long], 14);

      coords.setLong(85.38254499435426);
      coords.setLat(27.78337247586879);

      coords.setDestLong(85.37621498107912);
      coords.setDestLat(27.810003698138686);

      //   27.78337247586879, 85.38254499435426
    }

    getLocation();
  }, [coords.long, coords.lat]);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[coords.lat, coords.long]}>
        <Popup>Source</Popup>
      </Marker>

      <Marker
        ref={markerRef}
        position={[coords.destLat, coords.destLong]}
        draggable={true}
        eventHandlers={eventHandlers}
      >
        <Popup>
          Destination {coords.destLat}, {coords.destLong}
        </Popup>
      </Marker>

      <GeoJSON data={shivapuri} />

      {routes.map((route) => {
        return (
          <GeoJSON
            key={Math.random().toString()}
            data={route}
            style={{ color: "green" }}
          />
        );
      })}
    </>
  );
};

export default MapA;
