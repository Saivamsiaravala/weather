// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Location, CoordinatesType, WeatherDataType } from "../Types";
import axios from "axios";
import WeatherData from "./WeatherData";
import Loading from "./Loading";

// const weatherUrl: string = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,cloud_cover,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,cloud_cover,visibility,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,wind_speed_10m_max&timezone=auto`;

const Data = ({
  locations,
  coordinates,
}: {
  locations: Location[];
  coordinates: CoordinatesType | undefined;
}) => {
  const [data, setData] = useState<WeatherDataType>();
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.lat}&longitude=${coordinates?.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,cloud_cover,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,cloud_cover,visibility,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,wind_speed_10m_max&timezone=auto`
      );
      // if (response.status === 200) {
      //   setIsLoading(false);
      // }
      setData(response.data);
    };
    fetchWeather();
  }, [coordinates]);
  // console.log(locations);

  return (
    <div className="data">
      <div className="locations" style={{ fontSize: "10px" }}>
        {/* {locations[0].display_name.slice(0, 100)}... */}
        <ul>
          {locations.map((location, index) => {
            return <li key={index}>{location.display_name.slice(0, 100)}</li>;
          })}
        </ul>
      </div>
      <div className="data-div">
        {data ? <WeatherData data={data} locations={locations} /> : <Loading />}
        {/* {data?.daily.time[0]} */}
      </div>
    </div>
  );
};

export default Data;
