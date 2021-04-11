import React, { useEffect, useRef } from 'react';
import './map.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = "pk.eyJ1Ijoib3JpYWJyZXUiLCJhIjoiY2tuN3lwbHZlMHNzNTJubng4dGxpZGw0ZSJ9.8qa_Q00dk7-BeuOoJ6yBjQ";

export default function Map() {

  const mapContainer = useRef();

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/oriabreu/ckn8ronv01qc417pfz06rceka',
        center: [-3.68, 40.42],
        zoom: 12
      });
  
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
      });
  
      map.addControl(directions, 'top-left');
    });

    return (
      <div ref={mapContainer} className="mapWrapper" />
    );
}


