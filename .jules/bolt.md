## 2024-04-19 - Intl.DateTimeFormat instantiation performance

**Learning:** Re-instantiating `Intl.DateTimeFormat` inside a React component's render cycle is computationally expensive, especially when rendering multiple elements (like forecast cards).
**Action:** Always cache `Intl.DateTimeFormat` instances outside of React components or use `useMemo` if dynamic locales are needed to prevent unnecessary performance overhead.

## 2024-04-19 - Safari Date Parsing Bug

**Learning:** Native `Date` parsing of `YYYY-MM-DD HH:mm:ss` strings (like those returned from OpenWeatherMap) fails in older Safari browsers unless hyphens are replaced with slashes (`YYYY/MM/DD HH:mm:ss`).
**Action:** When migrating away from `moment.js` to native `Date`, always sanitize date strings by replacing hyphens with forward slashes (`.replace(/-/g, "/")`) to ensure cross-browser compatibility before passing to the `Date` constructor.
