import React from "react";

// Cache the formatter outside the component to avoid re-creating it on every render
// This is significantly faster than using moment.js inside the component
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);

  return (
    <div className="card">
      <p className="day">{dayFormatter.format(dateObj)}</p>
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
