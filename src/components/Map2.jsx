import React, { useEffect } from "react";
import { TileLayer, useMap, Marker, Popup } from "react-leaflet";
import useLocation from "./hook/useLocation";

const Map2 = () => {
  const [long, lat] = useLocation();

  const map = useMap();

  useEffect(() => {
    map.setView([lat, long], 14);
  }, [long, lat]);

  return (
    <>
      <Marker position={[lat, long]}>
        <Popup>
          Lat={lat},Long={long}
        </Popup>
      </Marker>
    </>
  );
};

export default Map2;
