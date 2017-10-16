import React from 'react';

const months = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'];

const weekdays = [
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
];

let dateConverter = (unixTimestamp) => {
	let dateObj = new Date(unixTimestamp * 1000);
  let month = months[dateObj.getMonth()];
	let weekday = weekdays[dateObj.getDay()];
	let date = dateObj.getDate();

  return `${weekday}, ${date} ${month}`;
}

let timeConverter = (unixTimestamp) => {
	let timeObj = new Date(unixTimestamp * 1000);
  let month = months[timeObj.getMonth()];
	let weekday = weekdays[timeObj.getDay()];
	let date = timeObj.getDate();
	let hours = timeObj.getHours();
	let mins = ((timeObj.getMinutes()<10) ? '0' : '') + timeObj.getMinutes();

	return `${weekday}, ${date} ${month} at ${hours}:${mins}`;
}

let averageTemp = (minTemp, maxTemp) => {
	let sum = minTemp + maxTemp;
	return sum/2;
}

module.exports = {
  dateConverter: dateConverter,
	timeConverter: timeConverter,
	averageTemp: averageTemp
};
