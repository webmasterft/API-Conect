import React from "react";

// Cache the formatter to avoid re-creating it on every render cycle
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// React.memo prevents unnecessary re-renders when parent state updates
export const Card = React.memo(props => {
  // Replace hyphens with slashes for cross-browser Date parsing compatibility
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const date = new Date(dateStr);

  return (
    <div className="card">
      <p className="day">{dateFormatter.format(date)}</p>
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
