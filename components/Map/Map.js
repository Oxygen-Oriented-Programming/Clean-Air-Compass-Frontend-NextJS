import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Home.module.css';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import MapDescendent from './MapDescendent';

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';

export default function Map(props) {

  const [mapRef, setMapRef] = useState(null);

  const pointToLayer = (feature, center_point) => {
    return L.circleMarker(center_point, {
      radius: 8,
      fillColor: getFillColor(feature.properties["pm2.5"]),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };

const getFillColor = (interpolatedValue) => {
  // You can define your own color scale based on the interpolated value
  if (interpolatedValue >= 55) {
    return "#990033"; // unhealthy
  } else if (interpolatedValue >= 41) {
    return "#ff3300"; // unhealthy for sensitive high
  } else if (interpolatedValue >= 33) {
    return "#ff9900"; // unhealthy for sensitive groups low
  } else if (interpolatedValue >= 23 ) {
    return "#ffcc00"; // moderate high
  } else if (interpolatedValue >= 12 ) {
    return "#ffff00"; //moderate low
  } else if (interpolatedValue >= 6 ) {
    return "#ccff33"; // good high
  } else if (interpolatedValue > 0) {
    return "#99ff33"; // good low
  } else {
    return "grey";
  }
};


  const onEachFeature = (feature, layer) => {
    const properties = feature.properties;
    let tooltipContent = "";

    for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
        tooltipContent += `<b>${key}:</b> ${properties[key]}<br>`;
      }
    }

    layer.bindPopup(tooltipContent);
    layer.on("mouseover", function () {
      this.openPopup();
    });
    layer.on("mouseout", function () {
      this.closePopup();
    });
  };

  return (
    <div className="flex-1 ">
      <MapContainer
        // key={props.locationData ? props.locationData.center_point : null}
        className={style.map}
        center={
          props.locationData
            ? [
                props.locationData.center_point[1],
                props.locationData.center_point[0],
              ]
            : [47.0, -122.0]
        }
        zoom={props.locationData ? 12 : 8}
        scrollWheelZoom={true}
        style={{ width: "100vw", height: "100vh" }}
      >
        <MapDescendent setMap={props.setMap} map={props.map} />
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>contributors'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=wrICbM8xyaQ9BjsrLSNV"
        />

        {props.locationData && (
          <>
            <GeoJSON
              key={props.locationData}
              data={props.locationData.features}
              style={(feature) => ({
                color: null,
                fillOpacity: 0.6,
                fillColor: getFillColor(feature.properties.interpolated_value),
              })}
              onEachFeature={onEachFeature}
            />
            <GeoJSON
              key={props.locationData}
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
