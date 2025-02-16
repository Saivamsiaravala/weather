import { Link } from "react-router";
import TimeAndDate from "./TimeAndDate";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="links">
          <Link to="/" className="link">
            <span className="link-span">Landing</span>
          </Link>

          <Link to="hourly" className="link">
            <span className="link-span">Hourly</span>
          </Link>

          <Link to="monthly" className="link">
            <span className="link-span">Monthly</span>
          </Link>
        </div>
      </div>
      <div className="time-date-1">
        <TimeAndDate />
      </div>
    </div>
  );
};

export default NavBar;
