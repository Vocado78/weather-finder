import axios from 'axios';

const API_KEY = 'some string';
const ROOT_URL1 = `https://40saf8dmfk.execute-api.eu-central-1.amazonaws.com/prod/openweathermap/dailyforecast?`;
const ROOT_URL2 = 'https://40saf8dmfk.execute-api.eu-central-1.amazonaws.com/prod/openweathermap/weather?';

let getCurrentWeather = (city) => {
  let url2 = `${ROOT_URL2}q=${city}&type=accurate&appid=${API_KEY}&units=metric`;
  return axios.get(url2, { headers: {'Content-Type' : 'application/json'}})
    .then(function(res) {
      return res.data;
    })
    .catch(function(error) {
      console.warn(error);
  });
}

let getForecast = (city) => {
  let url = `${ROOT_URL1}q=${city}&type=accurate&appid=${API_KEY}&cnt=5&units=metric`;
  return axios.get(url, { headers: {'Content-Type' : 'application/json'}})
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.warn(error);
  });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};
