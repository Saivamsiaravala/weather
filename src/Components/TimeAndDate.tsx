import { useState } from "react";

const TimeAndDate = () => {
  let [date, setDate] = useState<Date>(new Date());

  function updateTime(): void {
    setDate(new Date());
  }
  setInterval(updateTime, 1000); // console.log(date.getHours());
  return (
    <div className="time-date">
      <h4>
        <div className="date">{date.toLocaleString()}</div>
        <div className="time-zone">Asia/Kolkata - IST</div>
      </h4>
    </div>
  );
};

export default TimeAndDate;
