import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { Location, CoordinatesType } from "../Types";
import Data from "../Components/Data";
// import { Link } from "react-router";
const apiURL = import.meta.env.VITE_GEOCODE_APIKEY;

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [coordinates, setCoordinates] = useState<CoordinatesType | undefined>();
  const [locations, setLocations] = useState<Location[]>([]);
  const [showData, setShowData] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const fetchCoordinates = async () => {
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${searchTerm}&api_key=${apiURL}`
      );
      // console.log(response);
      // if (response.status === 200) {
      setShowData(true);

      setCoordinates({
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      });
      setLocations(response.data);
    };
    fetchCoordinates();
  };

  return (
    <div className="landing-page">
      <div className="search-form">
        <form
          className="form"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            handleSubmit(event)
          }
        >
          <label className="form-label">Enter location</label>
          {/*    */}
          <div className="form-input">
            <input
              type="text"
              className="input"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="search-icon" type="submit">
              <FaSearch className="search-icon-btn" />
            </button>
          </div>
        </form>
      </div>
      <div className="data-panel">
        {showData && <Data locations={locations} coordinates={coordinates} />}
      </div>
      <div className="data-panel2">
        {showData && <Data locations={locations} coordinates={coordinates} />}
      </div>
    </div>
  );
};

export default Landing;
