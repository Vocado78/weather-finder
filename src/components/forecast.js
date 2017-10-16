import React from 'react';
import ForecastItem from './forecast_item';
import { Link } from 'react-router-dom';


const Forecast = props => {
      return (
        <div className="forecast-container">
          {props.forecastData.map(dataListItem => {
            return <Link to={{
              pathname: './details/' + props.location,
              state: dataListItem
            }} key={dataListItem.dt} title="Click to display details">
            <ForecastItem dataFromForecast={dataListItem}/></Link>
          })}
        </div>
        );
      };

export default Forecast;
