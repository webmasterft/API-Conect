import React from "react";

// ⚡ Bolt Performance Optimization:
// Replaced moment.js with native Intl.DateTimeFormat for faster formatting
// and cached the formatter outside the component to prevent re-initialization on every render.
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// ⚡ Bolt Performance Optimization:
// Wrapped Card in React.memo to prevent unnecessary re-renders when parent state updates.
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  return (
    <div className="card">
      <p className="day">{dateFormatter.format(new Date(dateStr))}</p>
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
