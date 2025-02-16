import { Route, Routes, Link } from "react-router";

import NavBar from "./Components/NavBar";
import { Hourly, Monthly, Landing } from "./Pages";
import TimeAndDate from "./Components/TimeAndDate";
const App = () => {
  return (
    <div>
      <div className="title-time">
        <h2>
          <Link to="." className="weather-title">
            <span className="">
              Weather<span className="app-title">-App</span>{" "}
            </span>
          </Link>
        </h2>
        <div className="time-date-2">
          <TimeAndDate />
        </div>
      </div>
      <div className="">
        <nav className="navbar-tag">
          <NavBar />
        </nav>
      </div>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/hourly" element={<Hourly />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </div>
  );
};

export default App;
