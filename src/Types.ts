export interface Location {
  boundingbox: number[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  type: string;
}

export interface CoordinatesType {
  lat: Number | null;
  lon: number | null;
}

export interface WeatherDataType {
  current: {
    apparent_temperature: number;
    cloud_cover: number;
    interval: number;
    precipitation: number;
    rain: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: string;
    wind_speed_10m: number;
  };
  current_units: {
    apparent_temperature: "°C";
    cloud_cover: "%";
    interval: "seconds";
    precipitation: "mm";
    rain: "mm";
    relative_humidity_2m: "%";
    temperature_2m: "°C";
    time: "iso8601";
    wind_speed_10m: "km/h";
  };
  daily: {
    rain_sum: Number[];
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: Number[];
    temperature_2m_min: Number[];
    time: string[];
    wind_speed_10m_max: Number[];
  };
  daily_units: {
    rain_sum: "mm";
    sunrise: "iso8601";
    sunset: "iso8601";
    temperature_2m_max: "°C";
    temperature_2m_min: "°C";
    time: "iso8601";
    wind_speed_10m_max: "km/h";
  };
  elevation: string;
  generationtime_ms: string;
  hourly: {
    apparent_temperature: Number[];
    cloud_cover: Number[];
    precipitation: Number[];
    precipitation_probability: Number[];
    rain: Number[];
    relative_humidity_2m: Number[];
    temperature_2m: Number[];
    time: string[];
    visibility: Number[];
    wind_speed_10m: Number[];
  };
  hourly_units: {
    apparent_temperature: "°C";
    cloud_cover: "%";
    precipitation: "mm";
    precipitation_probability: "%";
    rain: "mm";
    relative_humidity_2m: "%";
    temperature_2m: "°C";
    time: "iso8601";
    visibility: "m";
    wind_speed_10m: "km/h";
  };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: string;
}
