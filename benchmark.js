const moment = require('moment');

const dt_txt = "2023-10-25 12:00:00";

console.time('moment setup');
for(let i=0; i<10000; i++) {
  moment(dt_txt).format("dddd");
}
console.timeEnd('moment setup');

const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
console.time('Intl caching');
for(let i=0; i<10000; i++) {
  formatter.format(new Date(dt_txt.replace(/-/g, "/")));
}
console.timeEnd('Intl caching');
