const TodayCard = props => {
  return (
    <div className="todayCard">
      <span className="todaysDay">Today</span>
      <img className="weatherIcon" alt="Sunny" src="weather-icons/SVG/danieledesantis-weather-icons-cloudy.svg"/>
      <h3>{props.forecast.airTemperature} {String.fromCharCode(176)}C</h3>
      <p>Precipitation: {props.forecast.precipitation}</p>
      <p>Wind Speed: {props.forecast.windSpeed}</p>
    </div>
  )
}

export default TodayCard;