import React from "react";

// ⚡ Bolt Optimization: Instantiate DateTimeFormat once outside the component
// to prevent expensive re-instantiations on every render.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => (
  <div className="card">
    {/* ⚡ Bolt Optimization: Replaced heavy moment.js with native Intl.DateTimeFormat. */}
    {/* Replacing '-' with '/' to ensure cross-browser compatibility with Date constructor */}
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