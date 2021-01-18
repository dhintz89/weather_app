import GLOBAL from './globalVars.js';
import Clock from './Clock';

const TodayCard = props => {
  let cloud = props.forecast.cloudCover;
  let icon;
  if (props.forecast.precipitation > 192) {  // 8mm/hr
    icon = GLOBAL.stormsIcon;
  } else if (props.forecast.precipitation > 96) {  // 4mm/hr
    icon = GLOBAL.heavyRainIcon;
  } else if (props.forecast.precipitation > 12) {  // .5mm/hr
    icon = GLOBAL.lightRainIcon;
  } else {
      icon = 
      (cloud < 10) ? GLOBAL.sunnyIcon :
      (cloud < 30) ? GLOBAL.partlyCloudyIcon :
      (cloud < 50) ? GLOBAL.lightCloudsIcon :
      GLOBAL.heavyCloudsIcon; 
  }

  return (
    <div className="todayCard">
      <Clock/>
      <span className="todaysDay">Today</span>
      <img className="weatherIcon" alt="Sunny" src={icon}/>
      <h3>{props.forecast.airTemperature} {String.fromCharCode(176)}C</h3>
      <span>Precipitation: {props.forecast.precipitation}mm</span>
      <span>Wind Speed: {props.forecast.windSpeed}m/s</span>
    </div>
  )
}

export default TodayCard;