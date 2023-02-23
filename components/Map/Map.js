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

      fillColor: getFillColor(feature.properties["pm1.0"], feature.properties["pm2.5"], feature.properties["pm10.0"], feature.properties["pm2.5_10minute"], feature.properties["pm2.5_30minute"], feature.properties["pm2.5_30minute"]),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };

const getFillColor = (pm1, pm2, pm10, min10, min30, min60) => {
  // You can define your own color scale based on the interpolated value
  if (pm2 >= 55) {
    return "#990033"; // unhealthy
  } else if (pm2 >= 41) {
    return "#ff3300"; // unhealthy for sensitive high
  } else if (pm2 >= 33) {
    return "#ff9900"; // unhealthy for sensitive groups low
  } else if (pm2 >= 23 ) {
    return "#ffcc00"; // moderate high
  } else if (pm2 >= 12 ) {
    return "#ffff00"; //moderate low
  } else if (pm2 >= 6 ) {
    return "#ccff33"; // good high
  } else if (pm2 > 0) {
    return "#99ff33"; // good low
  } else if (pm1 > 0 || pm2 > 0 || pm10 > 0 || min10 > 0 || min30 > 0 || min60 > 0) {
    return "#99ff33"; // good low
  } else {
    return "grey";
  }
};

const getFillColor2 = (val) => {
  // You can define your own color scale based on the interpolated value
  if (val >= 55) {
    return "#990033"; // unhealthy
  } else if (val >= 41) {
    return "#ff3300"; // unhealthy for sensitive high
  } else if (val >= 33) {
    return "#ff9900"; // unhealthy for sensitive groups low
  } else if (val >= 23 ) {
    return "#ffcc00"; // moderate high
  } else if (val >= 12 ) {
    return "#ffff00"; //moderate low
  } else if (val >= 6 ) {
    return "#ccff33"; // good high
  } else {
    return "#99ff33"; // good low
  }
};

  const onEachFeature = (feature, layer) => {
    const properties = feature.properties;
    let tooltipContent = '';

    for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
        tooltipContent += `<b>${key}:</b> ${properties[key]}<br>`;
      }
    }

    layer.bindPopup(tooltipContent);
    layer.on('mouseover', function () {
      this.openPopup();
    });
    layer.on('mouseout', function () {
      this.closePopup();
    });
  };

  return (
    <div className='flex-1 '>
      <MapContainer
        key={props.locationData ? props.locationData.center_point : null}
        className={style.map}
        center={
          props.locationData
            ? [
                props.locationData.center_point[1],
                props.locationData.center_point[0],
              ]
          : 
          [47.0, -122.0]
        }
        zoom={props.locationData ? 12 : 8}
        scrollWheelZoom={true}
        style={{ width: '100vw', height: '100vh' }}
      >
        <MapDescendent setMap={props.setMap} map={props.map} />
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>contributors'
          url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=wrICbM8xyaQ9BjsrLSNV'
        />

        {props.locationData && (
          <>
            <GeoJSON
              key={props.locationData}
              data={props.locationData.features}
              style={(feature) => ({
                color: null,
                fillOpacity: 0.6,
                fillColor: getFillColor2(feature.properties.interpolated_value),
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
