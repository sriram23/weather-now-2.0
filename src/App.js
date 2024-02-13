import { useState } from "react";
import Weather from "./components/weather/weather.jsx";
import Search from "./components/search/search.jsx";

function App() {
  const [bg, setBg] = useState(Math.floor(Math.random() * 7) + 1);
  const [city, setCity] = useState("");
  return (
    <div className="main-container" id={"b" + bg + "-bg"}>
      <Search onValueChange={(value) => setCity(value)}/>
      <div className="weather-main-container">
        <Weather city={city} />
        <div>
          <button
            onClick={() => {
              setBg(Math.floor(Math.random() * 7) + 1);
            }}
          >
            Shuffle Background
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
