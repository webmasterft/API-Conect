import React from "react";

// Cache the DateTimeFormat instance to avoid recreating it on every render
// This is significantly faster than instantiating moment.js or new Intl formatters
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

const CardComponent = props => {
  // Replace hyphens with slashes for cross-browser date parsing compatibility
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
};

// Use React.memo to prevent unnecessary re-renders when parent state updates
export const Card = React.memo(CardComponent);
