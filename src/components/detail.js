import React from 'react';
import queryString from 'query-string';
import helpers from '../utils/helpers';
import { dateConverter } from '../utils/helpers';


const Detail = props => {
    const icon = props.location.state.weather[0].icon;
    const date = dateConverter(props.location.state.dt);
    const type = props.location.state.weather[0].description;
    const typeCap = type.charAt(0).toUpperCase() + type.slice(1);
    const minTemp = Math.round(props.location.state.temp.min);
    const maxTemp = Math.round(props.location.state.temp.max);
    const humidity = props.location.state.humidity;
    const wspeed = props.location.state.speed;
    const city = props.location.pathname.slice(9, -2);
    const country = props.location.pathname.slice(-2);
    const imageSource = require('../images/' + icon + '.svg')

    return (
    <div className="detail-container">
      <h3 className="detail-header">
      Detailed Forecast for {city} {country}</h3>
      <p className="date">{date}</p>
      <img className="icon" src={imageSource} alt="icon"
        height="150"/>
      <p>{typeCap}</p>
      <p>Min temp {minTemp}°C</p>
      <p>Max temp {maxTemp}°C</p>
      <p>Humidity {humidity}%</p>
      <p>Wind speed {wspeed}m/s</p>
    </div>
    );
  }

export default Detail;
