import React from "react";

// Cache DateTimeFormat outside component for better performance, avoiding moment.js overhead
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Use React.memo to prevent unnecessary re-renders of list items
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dayName = dayFormatter.format(new Date(dateStr));

  return (
    <div className="card">
      <p className="day">{dayName}</p>
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
