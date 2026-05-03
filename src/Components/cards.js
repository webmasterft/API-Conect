import React, { memo } from "react";

// Cache DateTimeFormat instance outside component to prevent expensive re-instantiation on every render
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = memo(props => (
  <div className="card">
    <p className="day">
      {dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}
    </p>
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
));
