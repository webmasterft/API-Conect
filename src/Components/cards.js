import React from "react";
// import moment from "moment";
// ⚡ Bolt: Removed moment in favor of native Intl.DateTimeFormat for performance

// ⚡ Bolt: Cache the formatter instance outside the component to prevent
// recreating it on every render, which significantly improves performance
// when rendering a large number of cards.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

export const Card = props => (
  <div className="card">
    {/* ⚡ Bolt: Replace hyphens with slashes for cross-browser Date parsing compatibility */}
    <p className="day">{dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}</p>
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
