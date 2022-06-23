import React, { useState } from "react";
import { MapContainer } from "react-leaflet";

import { length } from "@turf/turf";

import MapA from "./MapA";

const distance = (routes) => {
  let data = 0;
  for (const route of routes) {
    data += length(route, { units: "kilometers" });
  }
  return data;
};

const Map = () => {
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);

  const [destLat, setDestLat] = useState(Number);
  const [destLong, setDestLong] = useState(Number);

  const [routes, setRoutes] = useState([]);

  const [shivapuri, showShivaPuri] = useState(false);

  return (
    <>
      <div className="absolute w-{1/2} p-3 flex justify-center bg-white z-[500] top-0 right-0 drop-shadow rounded">
        <button
          onClick={() => showShivaPuri(true)}
          className="w-auto bg-green-500 px-2 py-1 rounded text-white"
        >
          Mock Shivapuri
        </button>
      </div>

      <div className="absolute w-[80%] p-5 flex justify-center bg-white z-[500] bottom-10 left-[50%] translate-x-[-50%] drop-shadow-2xl rounded-lg">
        Hello I hiked {distance(routes)}kms in {distance(routes) / 3.5}hour
      </div>

      {shivapuri && (
        <MapContainer doubleClickZoom={false} zoom={14} center={[lat, long]}>
          <MapA
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
        </MapContainer>
      )}
    </>
  );
};

export default Map;
