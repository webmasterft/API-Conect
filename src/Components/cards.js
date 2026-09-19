import React, { memo } from "react";

// Cache Intl.DateTimeFormat outside component to prevent re-instantiation on every render
// This is significantly faster than using moment.js inside the render cycle
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

const CardComponent = props => {
  // Parse date string. The OpenWeatherMap API returns "YYYY-MM-DD HH:mm:ss"
  // Replace hyphens with slashes for cross-browser Date constructor compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const date = new Date(dateStr);
  const formattedDay = dateFormatter.format(date);

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
};

// Wrap in React.memo() to prevent unnecessary re-renders when parent state updates
export const Card = memo(CardComponent);
