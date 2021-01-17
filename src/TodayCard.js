import { render } from '@testing-library/react';
import React, {Component} from 'react';

export default class TodayCard extends Component {
  render() {
    return (
      <div className="todayCard">
        <span className="todaysDay">Today</span>
        <img className="weatherIcon" alt="Sunny" src="weather-icons/SVG/danieledesantis-weather-icons-cloudy.svg"/>
        <h3>{this.props.airTemperature} {String.fromCharCode(248)}</h3>
        <p>{this.props.precipitation}</p>
        <p>{this.props.windSpeed}</p>
      </div>
    )
  }
}