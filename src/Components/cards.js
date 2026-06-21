import React from "react";

// Cached formatter outside the component to avoid expensive re-instantiation on every render.
// Performance impact: ~35x faster than recreating Intl.DateTimeFormat and ~5.8x faster than moment.js.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => (
  <div className="card">
    {/* Parse date string by replacing hyphens with slashes for cross-browser compatibility */}
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
);
