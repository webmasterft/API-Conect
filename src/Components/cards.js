import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to prevent re-instantiation
// This is significantly faster than using moment() or re-creating Intl instances on every render
const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser date parsing compatibility
  const dtStr = props.item.dt_txt.replace(/-/g, "/");
  return (
  <div className="card">
    <p className="day">{dateFormatter.format(new Date(dtStr))}</p>
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
)};
