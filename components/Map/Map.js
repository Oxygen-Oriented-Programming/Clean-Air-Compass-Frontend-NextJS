import 'leaflet/dist/leaflet.css';
import style from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function Map(props) {
  const [geojsonData, setGeojsonData] = useState(null);

  // useEffect(() => {
  //   fetch('/api/air-quality-map')
  //     .then(res => res.json())
  //     .then(data => setGeojsonData(data));
  // }, []);

  useEffect(() => {
    setGeojsonData({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.335167, 47.608013]
          },
          properties: {
            name: 'Pioneer Square',
            airQuality: 60
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.324958, 47.665085]
          },
          properties: {
            name: 'Green Lake',
            airQuality: 120
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.339006, 47.605815]
          },
          properties: {
            name: 'International District',
            airQuality: 150
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.332639, 47.592348]
          },
          properties: {
            name: 'Columbia City',
            airQuality: 200
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.353337, 47.671861]
          },
          properties: {
            name: 'Northgate',
            airQuality: 300
          }
        }
      ]
    });
  }, []);

  function getColor(airQuality) {
    return airQuality > 300
    ? '#800026'
    : airQuality > 200
    ? '#BD0026'
    : airQuality > 150
    ? '#E31A1C'
    : airQuality > 100
    ? '#FC4E2A'
    : airQuality > 50
    ? '#FD8D3C'
    : airQuality > 0
    ? '#FEB24C'
    : '#FFEDA0';
  }

  return (
    <MapContainer className={style.map} center={props.locationData ? [props.locationData.lat, props.locationData.lon] : [47.000, -122.000]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          style={feature => ({
            fillColor: getColor(feature.properties.airQuality),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7,
          })}
        />
      )}
    </MapContainer>
  );
}

export default Map;
