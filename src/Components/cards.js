import React, { memo } from "react";

// Cache the formatter outside the component to avoid re-instantiating on every render
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = memo(props => {
  // Ensure cross-browser compatibility by replacing hyphens with slashes
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);
  const dayName = dayFormatter.format(dateObj);

  return (
    <div className="card">
      <p className="day">{dayName}</p>
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
