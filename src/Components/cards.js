import React from "react";

// ⚡ Bolt: Removed heavy moment.js dependency in favor of native Intl.DateTimeFormat
// This reduces bundle size and improves parse/execution time.
// The formatter is instantiated outside the component to avoid recreating it on every render.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => (
  <div className="card">
    {/* ⚡ Bolt: Parse date string directly. Replaced hyphens with slashes for cross-browser compatibility */}
    <p className="day">{dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}</p>
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
