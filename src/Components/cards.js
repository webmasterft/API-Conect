import React from "react";

// Bolt Performance Optimization:
// Initialize Intl.DateTimeFormat once outside the component to avoid expensive
// re-instantiation on every render. Replaces heavy moment.js dependency.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility (Safari)
  // as OpenWeatherMap returns format 'YYYY-MM-DD HH:mm:ss'
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);
  const formattedDay = dayFormatter.format(dateObj);

  return (
    <div className="card">
      <p className="day">{formattedDay}</p>
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
};