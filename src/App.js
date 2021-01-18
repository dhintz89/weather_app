import React, {useState} from 'react';
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
// precipitation: 0mm/day

function App() {
  const [forecasts, setForecasts] = useState({
    day0: {
      dayOfWeek: "Sun",
      airTemperature: 25,
      cloudCover: 25,
      precipitation: 12,
      windSpeed: 5
    },
    day1: {
      dayOfWeek: "Mon",
      airTemperature: 28,
      cloudCover: 20,
      precipitation: 2,
      windSpeed: 5
    },
    day2: {
      dayOfWeek: "Tue",
      airTemperature: 25,
      cloudCover: 20,
      precipitation: 200,
      windSpeed: 5
    },
    day3: {
      dayOfWeek: "Wed",
      airTemperature: 25,
      cloudCover: 20,
      precipitation: 2,
      windSpeed: 5
    },
    day4: {
      dayOfWeek: "Thurs",
      airTemperature: 25,
      cloudCover: 55,
      precipitation: 2,
      windSpeed: 5
    },
    day5: {
      dayOfWeek: "Fri",
      airTemperature: 25,
      cloudCover: 20,
      precipitation: 2,
      windSpeed: 5
    }
  });

  return (
    <div className="App-body">
      <TodayCard key="day0" forecast={forecasts.day0} />
      <div className="forecast">
        <Card key="day1" forecast={forecasts.day1} />
        <Card key="day2" forecast={forecasts.day2} />
        <Card key="day3" forecast={forecasts.day3} />
        <Card key="day4" forecast={forecasts.day4} />
        <Card key="day5" forecast={forecasts.day5} />
      </div>
      <br/>
    </div>
  );
}

export default App;
