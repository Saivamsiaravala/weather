import { Location, WeatherDataType } from "../Types";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaCloudRain } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoIosTime } from "react-icons/io";

const WeatherData = ({
  data,
  locations,
}: {
  data: WeatherDataType;
  locations: Location[];
}) => {
  // console.log(locations);
  return (
    <div className="weather-data">
      <div className="current-weather">
        <header className="current-weather-title">Current Weather</header>
        <p className="current-location-name">
          {locations[0].display_name.slice(0, 100)}
        </p>
        <ul className="current-data">
          <li>
            <IoIosTime /> {data.current.time.slice(11)}
          </li>
          <li>
            <FaTemperatureHalf /> {data.current.temperature_2m}
          </li>
          <li>
            <FaTemperatureHalf />
            <sub style={{ fontSize: "8px" }}>App</sub>
            {data.current.apparent_temperature}
          </li>
          <li>
            {" "}
            <FaWind /> {data.current.wind_speed_10m}
          </li>
          <li>
            <FaCloudRain /> {data.current.rain}
          </li>
          <li>
            <WiHumidity /> {data.current.relative_humidity_2m}
          </li>
        </ul>
      </div>

      <ul className="data-time">
        {data.hourly.time.slice(0, 24).map((item, index) => {
          if (index % 3 === 0) {
            return (
              <li key={index} className="time">
                {item.toString().slice(11)}
              </li>
            );
          }
        })}
      </ul>
      <ul className="data-temp">
        {data.hourly.temperature_2m.slice(0, 24).map((item, index) => {
          if (index % 3 === 0) {
            return (
              <li key={index} className="temp">
                {item.toString()}
              </li>
            );
          }
        })}
      </ul>
      <ul className="data-apptemp">
        {data.hourly.apparent_temperature.slice(0, 24).map((item, index) => {
          if (index % 3 === 0) {
            return (
              <li key={index} className="apptemp">
                {item.toString()}
              </li>
            );
          }
        })}
      </ul>
      <ul className="data-wind">
        {data.hourly.wind_speed_10m.slice(0, 24).map((item, index) => {
          if (index % 3 === 0) {
            return (
              <li key={index} className="wind">
                {item.toString()}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default WeatherData;
