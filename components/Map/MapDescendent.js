import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function MapDescendent({ setMap, setIsMapLoaded, isMapLoaded }) {
  const leafletMap = useMap();

  useEffect(() => {
    setMap(leafletMap)
    if (!isMapLoaded) {
        setIsMapLoaded(true);
    }
  }, [isMapLoaded, setIsMapLoaded, setMap, leafletMap]);

}