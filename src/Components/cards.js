import React from "react";

// ⚡ Bolt Optimization: Cache Intl.DateTimeFormat instance outside the component
// This avoids expensive moment.js parsing and formatter re-instantiation on every render.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => (
  <div className="card">
    <p className="day">
      {/*
        The dt_txt string "YYYY-MM-DD HH:mm:ss" is safely parsed by replacing hyphens with slashes
        for cross-browser compatibility before feeding it to Date()
      */}
      {dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}
    </p>
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
