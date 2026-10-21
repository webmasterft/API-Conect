import React from "react";

// Optimization: Cache Intl.DateTimeFormat instance to avoid recreation on every render cycle.
// This is significantly faster than using moment.js or instantiating Intl.DateTimeFormat repeatedly.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Optimization: Wrap with React.memo() to prevent unnecessary re-renders when parent state updates
// but this card's props haven't changed.
export const Card = React.memo(props => (
  <div className="card">
    <p className="day">
      {/* Ensure cross-browser date parsing by replacing hyphens with slashes */}
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
