import React from "react";

// Cache the Intl.DateTimeFormat instance to avoid re-creating it on every render
// This is significantly faster than using moment.js or instantiating Intl.DateTimeFormat each time.
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// We use React.memo to prevent unnecessary re-renders when parent state changes but props don't
export const Card = React.memo(props => {
  // Format the date string replacing hyphens with slashes for cross-browser compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);
  const dayName = dayFormatter.format(dateObj);

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
