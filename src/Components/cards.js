import React from "react";

// Cache the date formatter outside the component to avoid re-instantiation on every render
const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser Date constructor compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const formattedDay = dateFormatter.format(new Date(dateStr));

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
