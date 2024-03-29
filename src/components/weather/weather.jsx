import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../weatherCard/weatherCard";
import Location from "../location/location";
import Temperature from "../temperature/temperature";
import Wind from "../wind/wind";
import Clouds from "../cloud/cloud";
import Sun from "../sun/sun";

const Weather = ({ city }) => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [locationError, setLocationError] = useState(true);
  const [weatherDataError, setWeatherDataError] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    console.log("City: ", city)
    fetchWeatherData(city);
  }, [city, lat, lon]);

  const fetchLocation = () => {
    console.log("Fetching location...");
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationError(false);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        return;
      });
    } catch (err) {
      console.error("Error fetching location: ", err);
      setLocationError(true);
    }
  };

  const fetchWeatherData = (city) => {
    const url = city
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    axios
      .get(url)
      .then((data) => {
        setWeatherData(data.data);
        setWeatherDataError(false);
      })
      .catch((err) => {
        setWeatherData({});
        setWeatherDataError(true);
      });
  };
  return (
    <div>
      {!city && locationError && (
        <p>
          We can't fetch your location! Enable location permission for this page
          or use a different browser (like Chrome)
        </p>
      )}
      {weatherDataError && (
        <p>Something went wrong while fetching weather data</p>
      )}
      {weatherData && !weatherDataError && (city ||!locationError) && (
        <div>
          <Location
            city={weatherData.name}
            country={weatherData.sys && weatherData.sys.country}
            date={weatherData.dt}
          />
          <WeatherCard weather={weatherData && weatherData.weather} />
          <Temperature temp={weatherData && weatherData.main} />
          <Wind wind={weatherData && weatherData.wind} />
          <Clouds clouds={weatherData && weatherData.clouds} />
          <Sun sun={weatherData && weatherData.sys} />
        </div>
      )}
      <a href="https://www.flaticon.com/authors/freepik" title="animated icons">
        Animated icons created by Freepik - Flaticon
      </a>
    </div>
  );
};

export default Weather;
