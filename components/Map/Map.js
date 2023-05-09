import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import MapDescendent from "./MapDescendent";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import {
  getFillColor2,
  onEachFeature,
  pointToLayer,
  adjustOpacity,
} from "./mapFunctions";

export default function Map(props) {
  return (
    <div className="flex">
      <MapContainer
        key={
          props.locationData
            ? props.locationData.center_point
            : props.defaultLocation
        }
        className={"fixed"}
        center={
          props.locationData
            ? [
                props.locationData.center_point[1] + 0.01,
                props.locationData.center_point[0] + 0.12,
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
