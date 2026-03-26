import React from "react";

// Cache DateTimeFormat instance outside of render to prevent expensive re-instantiation
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = props => {
  // Replace hyphens with slashes for cross-browser compatibility when parsing the date string
  // For 'YYYY-MM-DD HH:mm:ss' formats
  const formattedDateString = props.item.dt_txt.replace(/-/g, "/");
  const date = new Date(formattedDateString);

  return (
    <div className="card">
      <p className="day">{dayFormatter.format(date)}</p>
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
