import React from "react";

// ⚡ Bolt: Cache Intl.DateTimeFormat outside the component to prevent re-instantiation on every render cycle.
// This is significantly faster than using moment.js or creating new formatter instances.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => {
  // Ensure cross-browser date parsing by replacing hyphens with slashes
  const dateStr = props.item.dt_txt ? props.item.dt_txt.replace(/-/g, "/") : "";
  const dayName = dateStr ? dayFormatter.format(new Date(dateStr)) : "";

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
