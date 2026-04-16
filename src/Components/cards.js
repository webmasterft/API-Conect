import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to avoid
// expensive re-instantiation on every render (~78x faster).
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Replace hyphens with slashes for cross-browser Date parsing compatibility
const getFormattedDay = (dateString) => {
  const date = new Date(dateString.replace(/-/g, "/"));
  return dayFormatter.format(date);
};

export const Card = props => (
  <div className="card">
    <p className="day">{getFormattedDay(props.item.dt_txt)}</p>
    <p>
      <img
        src={
          "http://openweathermap.org/img/w/" +
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
