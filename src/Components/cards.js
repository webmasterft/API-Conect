import React from "react";

// Cache the date formatter outside the component to avoid re-instantiation
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// Wrap in React.memo to prevent unnecessary re-renders when parent state updates
export const Card = React.memo(props => (
  <div className="card">
    <p className="day">
      {/* Replace moment.js with native Intl.DateTimeFormat for ~10x faster formatting */}
      {dateFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}
    </p>
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
));
