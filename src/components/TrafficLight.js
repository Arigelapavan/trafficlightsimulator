// src/components/TrafficLight.js

import React, { useContext, useEffect } from 'react';
import { TrafficLightContext } from '../context/TrafficLightContext';
import './TrafficLight.css';

const TrafficLight = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  useEffect(() => {
    const timer = setInterval(() => {
      if (state.countdown === 0) {
        if (state.pedestrianRequested) {
          // Transition to Red for pedestrians
          dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'red', countdown: 5 } });
          dispatch({ type: 'RESET_PEDESTRIAN_REQUEST' });
        } else {
          // Handle the normal light sequence
          switch (state.currentLight) {
            case 'green':
              dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'yellow', countdown: 3 } });
              break;
            case 'yellow':
              dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'red', countdown: 7 } });
              break;
            case 'red':
              dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'green', countdown: 10 } });
              break;
            default:
              break;
          }
        }
      } else {
        dispatch({ type: 'CHANGE_LIGHT', payload: { light: state.currentLight, countdown: state.countdown - 1 } });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [state, dispatch]);

  return (
    <div className="traffic-light">
      <div className={`light green ${state.currentLight === 'green' ? 'active' : ''}`}></div>
      <div className={`light yellow ${state.currentLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light red ${state.currentLight === 'red' ? 'active' : ''}`}></div>
      <p>Time remaining: {state.countdown}s</p>
    </div>
  );
};

export default TrafficLight;

