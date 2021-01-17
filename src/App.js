import './App.css';
import Card from './Card.js';
import TodayCard from './TodayCard.js';

// IDEAL SAIL CONDITIONS: 
// windSpeed (meters/sec): 3-6 (m/s = knots/1.944)
// gust (meters/sec): <8
// windDirection (0=north): n/a
// windWaveHeight (m): <2
// windWavePeriod (sec): 
// airTemperature (c): >23
// cloudCover (%): <50
// visibility (km): >12km
// currentSpeed (meters/sec): 
// precipitation: 0

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.stormglass.io/v2";

function App() {
  return (
    <div className="App-body">
      <TodayCard cloudCover="20%" airTemperature="25" precipitation="2" windSpeed="5" />
      <div className="forecast">
        <Card day="Mon" />
        <Card day="Tue" />
        <Card day="Wed" />
        <Card day="Thu" />
        <Card day="Fri" />
      </div>
    </div>
  );
}

export default App;
