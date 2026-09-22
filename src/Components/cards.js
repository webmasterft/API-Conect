import React from "react";

// Cached formatter to improve performance by avoiding moment.js overhead and Intl re-instantiation
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// React.memo prevents unnecessary re-renders of cards when parent component state updates
export const Card = React.memo(props => (
  <div className="card">
    <p className="day">
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
));
