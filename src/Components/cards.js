import React from "react";

// Cache the formatter outside the component to avoid re-instantiation on every render
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

export const Card = React.memo(props => {
  // Replace hyphens with slashes for Safari/cross-browser compatibility when parsing date string
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const date = new Date(dateStr);

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
});
