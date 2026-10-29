import React from "react";

// Optimization: Cache Intl.DateTimeFormat instance outside component
// This avoids expensive re-instantiation on every render and replaces moment.js
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Optimization: Wrap component in React.memo() to prevent unnecessary re-renders
// when parent component state updates but props remain identical
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser date parsing compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dayName = dayFormatter.format(new Date(dateStr));

  return (
    <div className="card">
      <p className="day">{dayName}</p>
      <p>
        <img
          // Optimization: Use HTTPS to prevent mixed-content warnings
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
