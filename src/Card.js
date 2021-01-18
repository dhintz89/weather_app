const Card = props => {
  return (
    <div className="forecastCard">
      <span className="day">{props.forecast.dayOfWeek}</span>
      <img className="weatherIcon" alt="Sunny" src="weather-icons/SVG/danieledesantis-weather-icons-sunny.svg"/>
      <h3>airTemperature</h3>
      <p>cloudCover: 30%</p>
      <p>precipitation: 5kg</p>
      <p>windSpeed: 6m/s</p>
    </div>
  )
}

export default Card;