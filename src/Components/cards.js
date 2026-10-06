import React from "react";

// Cache the formatter outside the component to prevent re-instantiation on every render
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Use React.memo to prevent unnecessary re-renders when parent state updates but item hasn't changed
export const Card = React.memo(props => (
  <div className="card">
    <p className="day">
      {/* Replace hyphens with slashes for Safari/cross-browser compatibility before formatting */}
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
