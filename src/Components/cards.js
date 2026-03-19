import React from "react";

// ⚡ Bolt: Cache Intl.DateTimeFormat instance outside the component to prevent expensive re-instantiation on every render cycle
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// ⚡ Bolt: Wrap Card component with React.memo to prevent unnecessary re-renders when parent component updates without changing the card's props
export const Card = React.memo(props => (
  <div className="card">
    {/* ⚡ Bolt: Use native Intl.DateTimeFormat instead of heavy moment.js library for performance */}
    {/* ⚡ Bolt: Replace hyphens with forward slashes for cross-browser Date constructor compatibility */}
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
));
