import React from "react";

// Cache Intl.DateTimeFormat instance outside of component render cycle
// Orders of magnitude faster than instantiating on every render or using moment.js
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Apply React.memo() to prevent unnecessary re-renders when parent state updates
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date constructor compatibility
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
});
