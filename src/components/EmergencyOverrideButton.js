// src/components/EmergencyOverrideButton.js

import React, { useContext } from 'react';
import { TrafficLightContext } from '../context/TrafficLightContext';

const EmergencyOverrideButton = () => {
  const { dispatch } = useContext(TrafficLightContext);

  const handleEmergencyOverride = () => {
    dispatch({ type: 'EMERGENCY_OVERRIDE' });
  };

  return (
    <button onClick={handleEmergencyOverride}>Emergency Override</button>
  );
};

export default EmergencyOverrideButton;
