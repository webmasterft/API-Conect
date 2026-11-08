import React from "react";

// Optimization: Cache Intl.DateTimeFormat instance outside the component
// to avoid recreating the formatter and moment.js overhead on every render cycle.
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Optimization: Use React.memo to prevent unnecessary re-renders of the Card component
// when its parent (App) state changes but the specific item props do not.
export const Card = React.memo((props) => {
  // Replace hyphens with slashes to ensure cross-browser compatibility for the Date constructor
  const dateObj = new Date(props.item.dt_txt.replace(/-/g, "/"));

  return (
    <div className="card">
      <p className="day">{dateFormatter.format(dateObj)}</p>
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
