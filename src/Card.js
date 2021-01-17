import React, {Component} from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="forecastCard">
        <span className="day">{this.props.day}</span>
        <img className="weatherIcon" alt="Sunny" src="weather-icons/SVG/danieledesantis-weather-icons-sunny.svg">{/*depends on data*/}</img>
        <h3>airTemperature</h3>
        <p>cloudCover: 30%</p>
        <p>precipitation: 5kg</p>
        <p>windSpeed: 6m/s</p>
      </div>
    )
  }
}