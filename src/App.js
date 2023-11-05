import { useState } from "react";
import Weather from "./components/weather/weather.jsx";

function App() {
  const [bg, setBg] = useState(Math.floor(Math.random() * 7) + 1);
  return (
    <div className="main-container" id={"b" + bg + "-bg"}>
      <div className="weather-main-container">
        <Weather />
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
