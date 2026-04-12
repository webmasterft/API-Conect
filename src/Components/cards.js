import React from "react";

// Initialize the formatter outside the component to prevent expensive re-instantiation
// during every render cycle.
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => (
  <div className="card">
    <p className="day">
      {dateFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}
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
);
