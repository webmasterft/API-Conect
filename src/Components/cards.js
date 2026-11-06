import React from "react";

// PERFORMANCE OPTIMIZATION:
// Cache Intl.DateTimeFormat instance outside the component to avoid
// reinstantiating it on every render, which is significantly faster
// than using moment.js or instantiating within the component.
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

// PERFORMANCE OPTIMIZATION:
// Wrap the Card component in React.memo() to prevent unnecessary re-renders
// when the parent component's state updates, as Card only depends on props.
export const Card = React.memo(props => (
  <div className="card">
    <p className="day">
      {dayFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}
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
