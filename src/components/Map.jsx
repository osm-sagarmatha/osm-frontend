import React, { useState } from "react";
import { MapContainer } from "react-leaflet";

import MapA from "./MapA";

const Map = () => {
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);

  const [destLat, setDestLat] = useState(Number);
  const [destLong, setDestLong] = useState(Number);

  const [shivapuri, showShivaPuri] = useState(false);

  return (
    <>
      <div className="  p-5 flex justify-center  z-[500] top-0 right-17 drop-shadow rounded">
        <button
          onClick={() => showShivaPuri(true)}
          className="mx-auto bg-green-500 px-2 py-2  rounded text-white"
        >
          Mock Shivapuri
        </button>
      </div>

      {shivapuri && (
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
      )}
    </>
  );
};

export default Map;
