import React from "react";

// ⚡ Bolt Performance Optimization: Cache Intl.DateTimeFormat instance outside of render
// to avoid expensive re-instantiations and moment.js overhead during each component render.
const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

// ⚡ Bolt Performance Optimization: Wrap Card in React.memo to prevent unnecessary re-renders
// since props.item is unlikely to mutate deeply and parent state changes (like 'isLoaded' or 'city')
// shouldn't re-render existing cards unnecessarily.
export const Card = React.memo(props => (
  <div className="card">
    <p className="day">{dateFormatter.format(new Date(props.item.dt_txt.replace(/-/g, "/")))}</p>
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
