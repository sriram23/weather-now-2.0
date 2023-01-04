import React, {useState, useEffect} from "react";
import axios from "axios"


const Weather = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [locationError, setLocationError] = useState(true);
  const [weatherDataError, setWeatherDataError] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetchLocation() 
  }, [])
  
  useEffect(() => {
    fetchWeatherData();
  }, [lat, lon])

  const fetchLocation =  () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocationError(false);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      return;
    });
  };

  const fetchWeatherData = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    axios.get(url).then(data => {
      setWeatherData(data.data)
      setWeatherDataError(false)
    }).catch(err => {
      setWeatherData({})
      setWeatherDataError(true)
    })
  }
  return (
    <div>
      {locationError && <p>Unable to fetch Location</p>}
      {weatherDataError && <p>Something went wrong while fetching weather data</p>}
      {weatherData && !weatherDataError && <p>{JSON.stringify(weatherData)}</p>}
    </div>
  )
}

export default Weather;