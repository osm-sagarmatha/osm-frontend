import { useCallback, useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";

export default function DraggableMarker({ pos }) {
  const center = {
    lat: pos[0],
    lng: pos[1],
  };
  console.log("pos", pos);
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);
  const markerRef = useRef(null);
  const data = {
    activityType: "RUN",
    startTime: "2016-07-06T12:36:00Z",
    waypoints: [
      {
        latitude: lat,
        longitude: long,
        elevation: 0,
        time: "2016-07-06T12:36:00Z",
      },
    ],
  };
  const gpx = createGpx(data.waypoints, {
    activityName: data.activityType,
    startTime: data.startTime,
  });
  console.log("gpx", gpx);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setLat(position.lat);
          setLat(position.long);
          console.log("marker", marker);
          setPosition([pos.lat, pos.lng]);
        }
      },
    }),
    [pos.lat, pos.lng]
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker position={position} key={Math.random().toString()} ref={markerRef}>
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          <h1>
            lat={position.lat}lng={position.lng}
          </h1>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}{" "}
        </span>
      </Popup>
    </Marker>
  );
}
