// src/App.js

import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';
import EmergencyOverrideButton from './components/EmergencyOverrideButton';

function App() {
  return (
    <TrafficLightProvider>
      <div className="App">
        <TrafficLight />
        <PedestrianButton />
        <EmergencyOverrideButton />
      </div>
    </TrafficLightProvider>
  );
}

export default App;

