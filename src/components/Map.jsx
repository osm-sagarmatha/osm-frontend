import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { length } from "@turf/turf";

import MapA from "./MapA";
import Map2 from "./Map2";
import { useLocation } from "react-router-dom";

const distance = (routes) => {
  let data = 0;
  for (const route of routes) {
    data += length(route, { units: "kilometers" });
  }
  return data;
};

const Map = () => {
  const location = useLocation();

  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);

  const [destLat, setDestLat] = useState(Number);
  const [destLong, setDestLong] = useState(Number);

  const [routes, setRoutes] = useState([]);

  const [shivapuri, showShivaPuri] = useState(false);

  let locate = location.pathname.startsWith("/map");

  return (
    <>
      <div
        className={`p-5 flex justify-center ${
          locate ? "absolute left-[50%] translate-x-[-50%]" : ""
        } z-[500]  drop-shadow rounded`}
      >
        <button
          onClick={() => showShivaPuri(!shivapuri)}
          className=" bg-green-500 px-2 py-1 rounded text-white"
        >
          {!shivapuri ? "Teleport Shivapuri" : "Take me back"}
        </button>
      </div>

      {shivapuri && (
        <div className="absolute w-80 p-4 flex justify-center bg-white z-[500] bottom-14 left-[50%] translate-x-[-50%] drop-shadow-2xl rounded-lg">
          Hiking: {distance(routes).toFixed(1)} kms in{" "}
          {(distance(routes) / 3.5).toFixed(1)} hour
        </div>
      )}

      <MapContainer doubleClickZoom={false} zoom={14} center={[lat, long]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {shivapuri ? (
          <MapA
            key={"firest"}
            routes={routes}
            setRoutes={setRoutes}
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
        ) : (
          <Map2 key={"another"} />
        )}
      </MapContainer>
    </>
  );
};

export default Map;
