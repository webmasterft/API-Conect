import React from "react";

// Cache Intl.DateTimeFormat instance outside component to avoid expensive re-instantiation on every render cycle
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => (
  <div className="card">
    <p className="day">
      {/* Replace hyphens with slashes for cross-browser Date compatibility */}
      {dateFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}
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
