const moment = require('moment');

const dateStr = '2023-10-25 15:00:00';
const iterations = 10000;

console.time('moment');
for (let i = 0; i < iterations; i++) {
  moment(dateStr).format('dddd');
}
console.timeEnd('moment');

const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
console.time('Intl.DateTimeFormat (cached)');
for (let i = 0; i < iterations; i++) {
  dayFormatter.format(new Date(dateStr.replace(/-/g, '/')));
}
console.timeEnd('Intl.DateTimeFormat (cached)');
