import React from "react";

// Cache the formatter outside the component to prevent recreation on every render
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => {
  // Convert date string using replace for cross-browser compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const formattedDay = dayFormatter.format(new Date(dateStr));

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
