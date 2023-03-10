import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Map.module.css';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import MapDescendent from './MapDescendent';
import { useSession } from 'next-auth/react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import {getFillColor2, onEachFeature, pointToLayer} from "./mapFunctions";

export default function Map(props) {
  const [mapRef, setMapRef] = useState(null);
  const { data: session, status } = useSession();
  const [defaultLocation, setDefaultLocation] = useState([47.0, -122.0]);

  useEffect(() => {
    if(session && session.auth_token.default_location){
      getDefaultLatLong();
    }
  }, [session]);

  async function getDefaultLatLong() {
      const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&q=${session.auth_token.default_location}&format=json`;
      const apiData = await fetch(url);
      const response = await apiData.json();
      setDefaultLocation([response[0].lat, response[0].lon]);
  }

  function adjustOpacity(zoom) {
    if (zoom >= 11.5) {
      return 0.02
    }
    else if (zoom >= 10.5) {
      return 0.07
    }
    else if (zoom >= 9.5) {
      return 0.15
    }
    else if (zoom >= 8.5) {
      return 0.25
    }
    else if (zoom >= 7.5) {
      return 0.3
    }
  }

  
  props.map ? console.log(props.map.getZoom()):console.log('not loaded');

  return (
    <div className="flex">
      <MapContainer
        key={
          props.locationData
            ? props.locationData.center_point
            : props.defaultLocation
        }
        className={style.map}
        center={
          props.locationData
            ? [
                props.locationData.center_point[1],
                props.locationData.center_point[0],
              ]
            : props.defaultLocation
        }
        zoom={props.map ? props.map.getZoom() - 0.25 : 11.5}
        zoomSnap={0.25}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <MapDescendent
          setMap={props.setMap}
          map={props.map}
          isMapLoaded={props.isMapLoaded}
          setIsMapLoaded={props.setIsMapLoaded}
        />
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=wrICbM8xyaQ9BjsrLSNV"
        />

        {props.locationData && (
          <>
            <GeoJSON
              key={props.locationData}
              data={props.locationData.features}
              style={(feature) => ({
                color: getFillColor2(feature.properties["pm2.5"]),
                weight: 0,
                opacity: 0.02,
                fillRule: "nonzero",
                fillOpacity: adjustOpacity(props.map.getZoom()),
                fillColor: getFillColor2(feature.properties["pm2.5"]),
              })}
              onEachFeature={onEachFeature}
            />
            <GeoJSON
              key={props.locationData.points}
              data={props.locationData.points}
              pointToLayer={pointToLayer}
              onEachFeature={onEachFeature}
            />
          </>
        )}
      </MapContainer>
    </div>
  );
}
