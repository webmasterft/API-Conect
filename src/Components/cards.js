import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to avoid expensive
// re-instantiations on every render cycle. This is significantly faster than moment.js
// or re-creating the Intl.DateTimeFormat instance inside the functional component.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => (
  <div className="card">
    {/* Parse string to date, replacing '-' with '/' for cross-browser support */}
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
