import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: '80vw',
    height: '60vh',
    latitude: 40.420261522589406,
    longitude: -3.6882649339095197,
    zoom: 12
  });
  
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={"pk.eyJ1Ijoib3JpYWJyZXUiLCJhIjoiY2tuN3lwbHZlMHNzNTJubng4dGxpZGw0ZSJ9.8qa_Q00dk7-BeuOoJ6yBjQ"}
      mapStyle={"mapbox://styles/oriabreu/ckn8ronv01qc417pfz06rceka"}
    />
  );
}