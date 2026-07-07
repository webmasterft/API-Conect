import React from "react";

// Cached DateTimeFormat instance for better performance, replaces moment.js
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

const formatDay = (dtTxt) => {
  const dateStr = dtTxt.replace(/-/g, "/");
  return dateFormatter.format(new Date(dateStr));
};

export const Card = props => (
  <div className="card">
    <p className="day">{formatDay(props.item.dt_txt)}</p>
    <p>
      <img
        src={
          "https://openweathermap.org/img/w/" +
          props.item.weather[0].icon +
          ".png"
        }
        alt=""
      />
    </p>
    <ul>
      <li>
        <strong>{props.item.main.temp_max.toFixed(1)}&deg;</strong>
      </li>
      <li>{props.item.main.temp_min.toFixed(1)}&deg;</li>
    </ul>
  </div>
);
