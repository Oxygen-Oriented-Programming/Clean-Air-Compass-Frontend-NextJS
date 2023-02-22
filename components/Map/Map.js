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
      fillColor: '#ff7800',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };

  const getFillColor = (interpolatedValue) => {
    // You can define your own color scale based on the interpolated value
    if (interpolatedValue <= 8) {
      return '#00ff00';
    } else if (interpolatedValue >= 9 && interpolatedValue <= 16 ) {
      return '#99ff33';
    } else if (interpolatedValue >= 17 && interpolatedValue <= 24 ) {
      return '#ccff33';
    } else if (interpolatedValue >= 25 && interpolatedValue <= 32 ) {
      return '#ffff00';
    } else if (interpolatedValue >= 33 && interpolatedValue <= 40 ) {
      return '#ffcc00';
    } else if (interpolatedValue >= 41 && interpolatedValue <= 48 ) {
      return '#ff9900';
    } else if (interpolatedValue >= 49 && interpolatedValue <= 56 ) {
      return '#ff3300';
    } else {
      return '#990033';
    }
  };

  return (
    <MapContainer
      // key={props.locationData ? props.locationData.center_point : null}
      className={style.map}
      center={
        // props.locationData
        //   ? [
        //       props.locationData.center_point[1],
        //       props.locationData.center_point[0],
        //     ]
        //   : 
          [47.0, -122.0]
      }
      
      zoom={props.locationData ? 12 : 8}
      scrollWheelZoom={true}
      style={{ width: '100vw', height: '100vh' }}
    >
      <MapDescendent setMap={props.setMap} />
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
            fillOpacity: 0.6,
            fillColor: getFillColor(feature.properties.interpolated_value),
          })}
        />
      )}
    </MapContainer>
  );
}
