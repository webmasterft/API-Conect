import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to prevent re-instantiation on every render.
// This is significantly faster than using moment.js or creating new formatters during render.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = React.memo(props => (
  <div className="card">
    {/* Format date by replacing hyphens with slashes for cross-browser Date parsing compatibility */}
    <p className="day">{dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}</p>
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
