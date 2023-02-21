import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from '../../styles/Home.module.css';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

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

  const pointToLayer = (feature, center_point) => {
    return L.circleMarker(center_point, {
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

  const { data, error, isLoading } = useSWR(
    'https://dolphin-app-ebj76.ondigitalocean.app/points/',
    fetcher
  );
  console.log(data);

  return (
    <MapContainer
      className={style.map}
      center={
        props.locationData
          ? [
              props.locationData.center_point[1],
              props.locationData.center_point[0],
            ]
          : [47.0, -122.0]
      }
      zoom={props.locationData ? 14 : 8}
      scrollWheelZoom={true}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>contributors'
        url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=wrICbM8xyaQ9BjsrLSNV'
      />

      <Marker
        position={
          props.locationData
            ? [
                props.locationData.center_point[1],
                props.locationData.center_point[0],
              ]
            : [47.0, -122.0]
        }
      >
        <Popup>
          Data1 <br /> Data2
        </Popup>
      </Marker>
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
