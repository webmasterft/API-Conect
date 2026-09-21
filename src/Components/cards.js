import React from "react";

// Cache the formatter outside the component to prevent re-instantiation on every render
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = React.memo(props => {
  // Parse 'YYYY-MM-DD HH:mm:ss' cross-browser safe by replacing hyphens with slashes
  const dateStr = props.item.dt_txt.replace(/-/g, "/");
  const dateObj = new Date(dateStr);

  return (
    <div className="card">
      <p className="day">{dateFormatter.format(dateObj)}</p>
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
