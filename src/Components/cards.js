import React from "react";

// Optimization: Cache Intl.DateTimeFormat instance outside the component
// to prevent recreating it on every render, which is significantly faster than moment.js
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Optimization: Wrap Card in React.memo to prevent unnecessary re-renders
// when parent component state updates but props remain the same
export const Card = React.memo(props => {
  // Replace moment.js parsing with optimized Date parsing
  // The API returns 'YYYY-MM-DD HH:mm:ss' which can cause issues in some browsers if passed directly to Date()
  // Replacing hyphens with slashes ensures broad cross-browser compatibility
  const dateObj = new Date(props.item.dt_txt.replace(/-/g, "/"));

  return (
    <div className="card">
      <p className="day">{dateFormatter.format(dateObj)}</p>
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
});
