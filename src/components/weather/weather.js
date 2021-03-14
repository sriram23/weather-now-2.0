import Sunny from "../../assets/sunny.jpg";
import Rainy from "../../assets/rainy.jpg";
import Thunder from "../../assets/thunder.jpg";
import Cloudy from "../../assets/cloudy.jpg";
import Haze from "../../assets/haze.jpg";
import Snow from "../../assets/snow.jpg";
import Mist from "../../assets/mist.jpg";
import Smoke from "../../assets/smoke.jpg";
import Dust from "../../assets/dust.jpg";
import Fog from "../../assets/fog.jpg";
import Sand from "../../assets/sand.jpg";
import Ash from "../../assets/ash.jpg";
import Tornado from "../../assets/tornado.jpg";
import Clear from "../../assets/clear.jpg";
import "../weather/weather.scss";
import { useEffect, useState } from "react";

export default function Weather() {
  const key = "7727eb7a7ad3adf1d307938860eca01b";
  const image = {
    Thunderstorm: Thunder,
    Drizzle: Rainy,
    Rain: Rainy,
    Snow,
    Mist,
    Smoke,
    Haze,
    Dust,
    Fog,
    Sand,
    Ash,
    Squall: Mist,
    Tornado,
    Clear: Sunny,
    Clouds: Cloudy,
  };
  const [dummyDependent] = useState("");
  const [city, setCity] = useState("Please allow location access to use this app");
  const [temperature, setTemp] = useState();
  const [weather, setWeather] = useState("");
  useEffect(() => fetchLocation(), [dummyDependent]);
  const fetchLocation = async function () {
    await navigator.geolocation.getCurrentPosition((position) => {
      const coord = [position.coords.latitude, position.coords.longitude];
      getWeatherData(coord);
      return;
    });
  };
  async function getWeatherData(coords) {
    return new Promise(async (resolve, reject) => {
      const res = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&units=metric&appid=${key}`
      );
      res.then((data) =>
          data.json().then((data) => {
            setCity(data.name);
            setTemp(data.main.temp);
            setWeather(data.weather[0].main);
            resolve();
          })
        ).catch((err) => {
          setCity('Please Enable Location and Internet')
          setTemp('');
          setWeather('');
          console.error('Something went wrong: ',err);
        })
    });
  }
  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${image[weather] || image['Haze']})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-container">
        <h1 className="location">{city}</h1>
        <p className="temperature">
          {temperature} {temperature?"\u00B0 c":''}
        </p>
        <p className="weather">{weather}</p>
      </div>
    </div>
  );
}
