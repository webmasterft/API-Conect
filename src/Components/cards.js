import React from "react";

// Cache Intl.DateTimeFormat instance outside the component to avoid re-instantiation overhead on every render
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => {
  // Ensure cross-browser date parsing compatibility by replacing hyphens with slashes
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
};
