import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function MapDescendent({ setMap }) {
  const leafletMap = useMap();

  useEffect(() => {
    setTimeout(() => {
      setMap(leafletMap);
    }, 0);
  }, [setMap, leafletMap]);
}