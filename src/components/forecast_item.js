import React from 'react';
import helpers from '../utils/helpers';
import { dateConverter } from '../utils/helpers';
import { averageTemp } from '../utils/helpers';


const ForecastItem = props => {
  const icon = props.dataFromForecast.weather[0].icon;
  const aveTemp = Math.round(averageTemp(props.dataFromForecast.temp.min,
    props.dataFromForecast.temp.max));
  const fullDate = dateConverter(props.dataFromForecast.dt);
  const imageSrc = require('../images/' + icon + '.svg');

  return (
    <div className="item-container">
    <img className="icon" src={imageSrc} alt="icon"
      height="120"/>
    <p>{fullDate}</p>
    <p>Mean temp {aveTemp}°C</p>
    </div>
  );
}

export default ForecastItem;
