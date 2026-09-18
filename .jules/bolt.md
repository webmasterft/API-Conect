## 2024-05-18 - [Date Formatting Performance]
**Learning:** Re-instantiating date formatters (like `moment.js` or `Intl.DateTimeFormat`) inside React render cycles introduces significant performance overhead, especially in list components where the formatter is created repeatedly.
**Action:** Always cache `Intl.DateTimeFormat` instances outside of React components and prefer native formatting over large libraries like `moment.js` for simple date displays.
