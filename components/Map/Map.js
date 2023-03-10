import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "../../styles/Map.module.css";
import MapDescendent from "./MapDescendent";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import {
  pointToLayer,
  getFillColor2,
  onEachFeature,
} from "../Functions/MapFunctions.js";

export default function Map(props) {
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
        // zoom={props.locationData ? 10 : 8}
        zoom={10}
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
                opacity: 0.05,
                fillOpacity: 0.05,
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
