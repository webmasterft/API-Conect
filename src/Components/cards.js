import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to avoid recreating it on every render
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Wrap in React.memo to prevent unnecessary re-renders when parent state updates
export const Card = React.memo(props => {
  // Convert "2023-10-25 12:00:00" to "2023/10/25 12:00:00" for Safari compatibility
  const date = new Date(props.item.dt_txt.replace(/-/g, "/"));
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
