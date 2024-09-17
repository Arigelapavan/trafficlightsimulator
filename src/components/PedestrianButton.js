// src/components/PedestrianButton.js

import React, { useContext } from 'react';
import { TrafficLightContext } from '../context/TrafficLightContext';

const PedestrianButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handlePedestrianClick = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return (
    <button onClick={handlePedestrianClick}>Request Pedestrian Crossing</button>
  );
};

export default PedestrianButton;

