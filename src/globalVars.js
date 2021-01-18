const GLOBAL = {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_URL: "https://api.stormglass.io/v2",
  sunnyIcon: "weather-icons/SVG/danieledesantis-weather-icons-sunny.svg",
  partlyCloudyIcon: "weather-icons/SVG/danieledesantis-weather-icons-cloudy.svg",
  lightCloudsIcon: "weather-icons/SVG/danieledesantis-weather-icons-cloudy-2.svg",
  heavyCloudsIcon: "weather-icons/SVG/danieledesantis-weather-icons-cloudy-3.svg",
  lightRainIcon: "weather-icons/SVG/danieledesantis-weather-icons-rainy.svg",
  heavyRainIcon: "weather-icons/SVG/danieledesantis-weather-icons-rainy-2.svg",
  stormsIcon: "weather-icons/SVG/danieledesantis-weather-icons-stormy.svg"
}

Object.freeze(GLOBAL);

export default GLOBAL;