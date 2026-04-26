## 2024-04-26 - Native Intl vs Moment.js performance
**Learning:** Native `Intl.DateTimeFormat` is significantly faster (~78x) than `moment.js` when formatting dates, provided the formatter is instantiated outside the component and not re-created on every render.
**Action:** Replace `moment.js` with `Intl.DateTimeFormat` for simple date/time formatting, and always cache the formatter instance outside the render cycle.
