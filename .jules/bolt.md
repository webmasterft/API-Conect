## 2024-05-24 - Intl.DateTimeFormat caching vs moment.js
**Learning:** Using `moment.js` and creating new instances on every render cycle for formatting dates (e.g., `moment(date).format("dddd")`) is a significant performance bottleneck, especially in lists.
**Action:** When formatting dates, prefer `Intl.DateTimeFormat`. Crucially, cache the formatter instance outside the component to prevent re-instantiation on every render. Use `dateString.replace(/-/g, "/")` for cross-browser parsing before passing to the native `Date` constructor.
