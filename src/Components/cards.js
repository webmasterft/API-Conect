import React from "react";

// Initialize Intl.DateTimeFormat outside the component to avoid re-instantiation on every render
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Wrap in React.memo to prevent unnecessary re-renders when props haven't changed
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateObj = new Date(props.item.dt_txt.replace(/-/g, "/"));

  return (
    <div className="card">
      <p className="day">{dayFormatter.format(dateObj)}</p>
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
  );
});
