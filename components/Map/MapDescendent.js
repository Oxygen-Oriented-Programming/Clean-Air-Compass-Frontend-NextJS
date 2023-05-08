import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function MapDescendent({ setMap, setIsMapLoaded, isMapLoaded }) {
  const leafletMap = useMap();

  useEffect(() => {
    setMap(leafletMap);
    if (!isMapLoaded) {
      setIsMapLoaded(true); // this only happens once when the map is originally loaded since nothing ever sets it back to false
    }
    // }, [isMapLoaded, setIsMapLoaded, setMap, leafletMap]);
  }, []);
}
