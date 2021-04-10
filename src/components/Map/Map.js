import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {GeolocateControl} from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.420261522589406,
    longitude: -3.6882649339095197,
    zoom: 12
  });

  const geolocateControlStyle= {
    right: 10,
    top: 10
  };
  
  return (
    <ReactMapGL
      {...viewport}
      width='100vw'
      height='100vh'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={"pk.eyJ1Ijoib3JpYWJyZXUiLCJhIjoiY2tuN3lwbHZlMHNzNTJubng4dGxpZGw0ZSJ9.8qa_Q00dk7-BeuOoJ6yBjQ"}
      mapStyle={"mapbox://styles/oriabreu/ckn8ronv01qc417pfz06rceka"}
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
}