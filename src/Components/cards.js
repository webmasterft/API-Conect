import React from "react";

// Cache the formatter outside the component to prevent re-instantiation on every render.
// This improves performance compared to using moment() inside the component.
const weekdayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => {
  // OpenWeatherMap dt_txt format: 'YYYY-MM-DD HH:mm:ss'
  // Replace hyphens with slashes to ensure compatibility across browsers for the Date constructor
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);
  const formattedDay = weekdayFormatter.format(dateObj);

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
