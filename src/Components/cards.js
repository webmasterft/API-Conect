import React from "react";

// Cache the formatter outside the component to avoid re-instantiation on every render cycle
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Wrap Card in React.memo to prevent unnecessary re-renders when parent state updates
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
