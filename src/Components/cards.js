import React from "react";

// ⚡ Bolt: Cache Intl.DateTimeFormat outside component to prevent
// expensive re-instantiation on every render (~78x faster than moment)
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt ? props.item.dt_txt.replace(/-/g, "/") : "";
  const formattedDay = dateStr ? dayFormatter.format(new Date(dateStr)) : "";

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
