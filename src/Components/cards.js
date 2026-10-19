import React from "react";

// Optimization: Cache Intl.DateTimeFormat instance to avoid recreating it on every render,
// and replace moment.js with native Intl API which is orders of magnitude faster.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Optimization: Wrap Card in React.memo() to prevent unnecessary re-renders when parent state updates
// but this specific card's props haven't changed.
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const formattedDay = dayFormatter.format(new Date(dateStr));

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
