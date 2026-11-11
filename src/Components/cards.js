import React from "react";

// Optimization: Cache Intl.DateTimeFormat instance outside the component
// This avoids re-instantiating the formatter or a heavy moment.js object on every render.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Optimization: Use React.memo to prevent unnecessary re-renders
// since this component only depends on its props.
export const Card = React.memo(props => (
  <div className="card">
    {/* Optimization: Replace moment.js with standard Date and Intl.DateTimeFormat.
        Replace hyphens with slashes for cross-browser compatibility. */}
    <p className="day">{dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}</p>
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
));
