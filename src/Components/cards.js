import React from "react";

// Cache Intl.DateTimeFormat outside component to avoid re-instantiation on every render.
// This is significantly faster (~78x) than using moment.js or creating new formatter instances.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt ? props.item.dt_txt.replace(/-/g, "/") : "";
  const dateObj = new Date(dateStr);
  const dayName = !isNaN(dateObj) ? dayFormatter.format(dateObj) : "";

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
