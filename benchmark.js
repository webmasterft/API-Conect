const moment = require("moment");

const dt_txt = "2023-10-25 15:00:00";

// Moment approach
console.time("moment");
for (let i = 0; i < 10000; i++) {
  moment(dt_txt).format("dddd");
}
console.timeEnd("moment");

// Intl approach
const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
console.time("Intl");
for (let i = 0; i < 10000; i++) {
  dateFormatter.format(new Date(dt_txt.replace(/-/g, "/")));
}
console.timeEnd("Intl");
