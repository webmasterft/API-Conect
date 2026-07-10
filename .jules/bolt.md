## 2023-10-25 - Replace moment.js with cached Intl.DateTimeFormat
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster than re-instantiating them during every render cycle or using moment.js for simple date formatting.
**Action:** When parsing 'YYYY-MM-DD HH:mm:ss' date strings from the OpenWeatherMap API, replace hyphens with slashes (`.replace(/-/g, "/")`) before passing them to the JavaScript `Date` constructor to ensure cross-browser compatibility.
