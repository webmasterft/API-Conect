import React from "react";

// Cache the Intl.DateTimeFormat instance outside the component
// to avoid expensive re-instantiation on every render.
// This replaces the heavy moment.js library for simple date formatting.
const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Wrap Card in React.memo to prevent unnecessary re-renders when parent state updates
// but props remain the same (e.g. when app state changes that doesn't affect this card)
export const Card = React.memo(props => {
  // Replace hyphens with slashes to ensure cross-browser compatibility for the Date constructor
  const dateObj = new Date(props.item.dt_txt.replace(/-/g, "/"));

  return (
    <div className="card">
      <p className="day">{dateFormatter.format(dateObj)}</p>
      <p>
        <img
          src={
            // Use HTTPS to prevent mixed-content warnings
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
