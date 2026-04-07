## 2025-04-07 - Date Parsing Cross-Browser Compatibility
**Learning:** When moving from libraries like `moment.js` to the native `Date` API for OpenWeatherMap strings (format `YYYY-MM-DD HH:mm:ss`), parsing can fail in some browsers like Safari due to the hyphens.
**Action:** When parsing API date strings using the `Date` constructor, always normalize hyphens to forward slashes (`.replace(/-/g, "/")`) to ensure cross-browser compatibility before passing to `Intl.DateTimeFormat`.
