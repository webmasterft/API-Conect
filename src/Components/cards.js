import React from "react";

// Cache DateTimeFormat instance to avoid recreation on every render
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Wrap in React.memo to prevent unnecessary re-renders when parent state updates
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date compatibility (e.g. Safari)
  const dateString = props.item.dt_txt.replace(/-/g, "/");
  const date = new Date(dateString);

  return (
    <div className="card">
      <p className="day">{dayFormatter.format(date)}</p>
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
