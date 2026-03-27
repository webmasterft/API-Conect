import React from "react";

// ⚡ Bolt: Cache Intl.DateTimeFormat instance outside the component
// to avoid expensive re-instantiation on every render cycle.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => (
  <div className="card">
    {/* ⚡ Bolt: Use native Intl.DateTimeFormat instead of heavy moment.js.
        Replace hyphens with slashes to fix Safari parsing issues with 'YYYY-MM-DD HH:mm:ss' format. */}
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
