import React, { useState, useEffect } from 'react';

const App = () => {
 const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });
 const [color, setColor] = useState('');

 useEffect(() => {
    updateColor();
 }, []);

 const updateColor = () => {
    const color = weather.temperature > 20 ? 'red' : 'blue';
    setColor(color);
 }

 return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: <span style={{ color }}>{weather.temperature}</span></p>
      <p>Conditions: {weather.conditions}</p>
    </div>
 );
}

export default App;