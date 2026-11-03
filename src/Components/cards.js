import React, { memo } from "react";

// Cache the Intl.DateTimeFormat instance outside the component to avoid re-instantiating on every render
// This is significantly faster than using moment.js or instantiating a new formatter on every render
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = memo(props => {
  // Replace hyphens with slashes for cross-browser compatibility when parsing date strings
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const date = new Date(dateStr);
  const formattedDay = dayFormatter.format(date);

  return (
    <div className="card">
      <p className="day">{formattedDay}</p>
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
});
