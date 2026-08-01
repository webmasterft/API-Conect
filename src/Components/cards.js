import React from "react";

// Cached Intl.DateTimeFormat instance to prevent re-instantiation on every render.
// Significantly faster than using moment.js for simple weekday formatting.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser compatibility when parsing the date string
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dayName = dayFormatter.format(new Date(dateStr));

  return (
    <div className="card">
      <p className="day">{dayName}</p>
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
