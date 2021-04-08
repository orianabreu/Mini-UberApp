import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.420261522589406,
    longitude: -3.6882649339095197,
    zoom: 12
  });
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <ReactMapGL
      {...viewport}
      width='100vw'
      height='100vh'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={"pk.eyJ1Ijoib3JpYWJyZXUiLCJhIjoiY2tuN3lwbHZlMHNzNTJubng4dGxpZGw0ZSJ9.8qa_Q00dk7-BeuOoJ6yBjQ"}
      mapStyle={"mapbox://styles/oriabreu/ckn8ronv01qc417pfz06rceka"}
    />
  );
}