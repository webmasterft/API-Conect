const moment = require("moment");

const dt_txt = "2023-10-15 12:00:00";

const t0 = performance.now();
for (let i = 0; i < 10000; i++) {
  moment(dt_txt).format("dddd");
}
const t1 = performance.now();
console.log(`Moment: ${t1 - t0} milliseconds.`);

const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
const t2 = performance.now();
for (let i = 0; i < 10000; i++) {
  dayFormatter.format(new Date(dt_txt.replace(/-/g, "/")));
}
const t3 = performance.now();
console.log(`Intl.DateTimeFormat: ${t3 - t2} milliseconds.`);
