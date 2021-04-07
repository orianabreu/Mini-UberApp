import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={"pk.eyJ1Ijoib3JpYWJyZXUiLCJhIjoiY2tuN3lwbHZlMHNzNTJubng4dGxpZGw0ZSJ9.8qa_Q00dk7-BeuOoJ6yBjQ"}
    />
  );
}