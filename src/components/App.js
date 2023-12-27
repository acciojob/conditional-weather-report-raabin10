import React, { Component } from 'react';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      weather: { temperature: 25, conditions: "Sunny" },
      color: ''
    };
 }

 componentDidMount() {
    this.updateColor();
 }

 updateColor() {
    const { weather } = this.state;
    const color = weather.temperature > 20 ? 'red' : 'blue';
    this.setState({ color });
 }

 render() {
    const { weather, color } = this.state;
    return (
      <div>
        <h1>Current Weather</h1>
        <p>Temperature: <span style={{ color }}>{weather.temperature}</span></p>
        <p>Conditions: {weather.conditions}</p>
      </div>
    );
 }
}

export default App;