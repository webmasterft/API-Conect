import React from "react";

// ⚡ Bolt Optimization: Use native Intl.DateTimeFormat instead of heavy moment.js library
// Instance declared outside component to avoid expensive re-instantiation on every render cycle
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // ⚡ Bolt Optimization: Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);

  return (
    <div className="card">
      <p className="day">{dayFormatter.format(dateObj)}</p>
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
};
