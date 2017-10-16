import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import { getCurrentWeather } from '../utils/api';
import { getForecast } from '../utils/api';
import Current from './current';
import Forecast from './forecast';
import ForecastItem from './forecast_item';


export default class Weather extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: "",
        country: "",
        forecast: null,
        current: null,
      };
    }
    componentDidMount() {
      const city = queryString.parse(this.props.location.search).city;
      this.showCurrentWeather(city);
      this.showForecast(city);
    }
    componentWillReceiveProps(nextProps) {
      const city = queryString.parse(nextProps.location.search).city;
      this.showCurrentWeather(city);
      this.showForecast(city);
    }
    showCurrentWeather(city) {
      api.getCurrentWeather(city)
        .then(function(currentWeather) {
            this.setState({
              current: currentWeather
            })
          }.bind(this))
    }
    showForecast(city) {
      api.getForecast(city)
        .then(function(forecast) {
          this.setState({
            name: forecast.city.name,
            country: forecast.city.country,
            forecast: forecast.list
          })
        }.bind(this))
    }
    render() {
      let location = this.state.name + this.state.country;

      if (!this.state.forecast) {
        return <div>Loading...</div>
      }

      return (
        <div>
          <h1 className="weather-header">
          {this.state.name} {this.state.country}</h1>
          <Current currentData={this.state.current}/>
          <h2 className="forecast-header">5-day Forecast</h2>
          <Forecast forecastData={this.state.forecast} location={location}/>
        </div>
        );
      }
    };
