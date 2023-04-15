import WeatherInput from "./components/weatherInput/WeatherInput";
import WeatherOutput from "./components/weatherOutput/WeatherOutput";
import "./App.css";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState({});
  return (
    <div className="App">
      {!show ? (
        <WeatherInput setShow={setShow} setWeather={setWeather} />
      ) : (
        <WeatherOutput setShow={setShow} weather={weather} />
      )}
    </div>
  );
}

export default App;
