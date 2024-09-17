// src/context/TrafficLightContext.js

import React, { createContext, useReducer } from 'react';

// Create context
const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green', // Start with green light
  pedestrianRequested: false,
  emergencyOverride: false,
  countdown: 10, // Countdown for green light initially
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return {
        ...state,
        currentLight: action.payload.light,
        countdown: action.payload.countdown,
      };
    case 'REQUEST_CROSSING':
      return {
        ...state,
        pedestrianRequested: true,
      };
    case 'EMERGENCY_OVERRIDE':
      return {
        ...state,
        emergencyOverride: true,
        currentLight: 'red', // Set red immediately for emergency vehicles
        countdown: 5, // Allow emergency vehicles to pass for 5 seconds
      };
    case 'RESET_PEDESTRIAN_REQUEST':
      return {
        ...state,
        pedestrianRequested: false,
      };
    default:
      return state;
  }
};

// Provider component
const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightProvider, TrafficLightContext };

