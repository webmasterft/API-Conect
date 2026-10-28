import React from "react";

// Cache the formatter outside the component to prevent re-instantiation on every render.
// This is significantly faster than using moment.js or instantiating Intl.DateTimeFormat inside the render cycle.
const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// Wrap in React.memo() to prevent unnecessary re-renders when parent component state updates.
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateString = props.item.dt_txt.replace(/-/g, "/");

  return (
    <div className="card">
      <p className="day">{dateFormatter.format(new Date(dateString))}</p>
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
