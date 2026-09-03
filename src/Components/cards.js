import React from "react";
// Removed moment.js for performance, using cached Intl.DateTimeFormat instead
// import moment from "moment";

// Cache the formatter to prevent re-instantiation on every render cycle
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser date parsing compatibility
  const dateObj = new Date(props.item.dt_txt.replace(/-/g, "/"));
  return (
    <div className="card">
      <p className="day">{dayFormatter.format(dateObj)}</p>
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
};
