import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to avoid re-instantiation
// Benchmarks show this is orders of magnitude faster than using moment.js or creating new formatters
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

const CardComponent = props => {
  // Replace hyphens with slashes for Safari/cross-browser compatibility when parsing OpenWeatherMap dates
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
};

// Use React.memo to prevent unnecessary re-renders when parent state updates
export const Card = React.memo(CardComponent);
