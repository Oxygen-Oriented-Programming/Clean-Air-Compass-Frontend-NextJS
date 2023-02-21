import 'leaflet/dist/leaflet.css';
import style from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function Map(props) {

  // function getColor(airQuality) {
  //   return airQuality > 300
  //   ? '#800026'
  //   : airQuality > 200
  //   ? '#BD0026'
  //   : airQuality > 150
  //   ? '#E31A1C'
  //   : airQuality > 100
  //   ? '#FC4E2A'
  //   : airQuality > 50
  //   ? '#FD8D3C'
  //   : airQuality > 0
  //   ? '#FEB24C'
  //   : '#FFEDA0';
  // }

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: '#ff7800',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };

  const getFillColor = (interpolatedValue) => {
    // You can define your own color scale based on the interpolated value
    if (interpolatedValue < 10) {
      return 'green';
    } else if (interpolatedValue >= 10 && interpolatedValue < 20) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <MapContainer
      className={style.map}
      center={
        props.locationData
          ? [props.locationData.center_point[1], props.locationData.center_point[0]]
          : [47.0, -122.0]
      }
      zoom= {
        props.locationData ?
        14 : 8
      }
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {props.locationData && (
        <GeoJSON
          data={props.locationData.features}
          style={(feature) => ({
            color: null,
            fillOpacity: 0.5,
            fillColor: getFillColor(feature.properties.interpolated_value),
          })}
        />
      )}
    </MapContainer>
  );
}

export default Map;
