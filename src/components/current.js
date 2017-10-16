import React from 'react';
import helpers from '../utils/helpers';
import { timeConverter } from '../utils/helpers';

export default class Current extends React.Component {
  render() {
    if (!this.props.currentData) {
      return <div>Loading...</div>
    }

    const currIcon = this.props.currentData.weather[0].icon;
    const currType = this.props.currentData.weather[0].description;
    const currTypeCap = currType.charAt(0).toUpperCase() + currType.slice(1);
    const currTime = timeConverter(this.props.currentData.dt);
    const imgSrc = require('../images/' + currIcon + '.svg');

    return (
      <div className="current-container">
        <p className="date">{currTime}</p>
        <img className="icon" src={imgSrc}
        alt="icon" height="120"/>
        <p>{currTypeCap}</p>
        <p>{Math.round(this.props.currentData.main.temp)}°C</p>
        <p>Humidity {this.props.currentData.main.humidity}%</p>
        <p>Wind speed {this.props.currentData.wind.speed} m/s</p>
      </div>
    );
  }
}
