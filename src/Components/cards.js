import React from "react";

// Cache the formatter outside the component to prevent re-instantiating on every render.
// This is significantly faster than using moment.js or creating a new Intl.DateTimeFormat
// instance during each render cycle.
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = React.memo(props => {
  // Replace hyphens with slashes to ensure cross-browser compatibility when parsing
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
});
