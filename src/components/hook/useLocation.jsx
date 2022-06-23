import { useEffect, useState } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);
  useEffect(() => {
    let watch;
    function getLocation() {
      if (navigator.geolocation) {
        watch = navigator.geolocation.watchPosition(showPosition, error, {
          enableHighAccuracy: false,
        });
        // console.log("watchid", watchid);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }
    function showPosition(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log(lat, long);
    }

    getLocation();

    return () => watch && navigator.geolocation.clearWatch(watch);
  }, [long, lat]);
  return [long, lat];
};

export default useLocation;
