## 2026-04-01 - Replaced moment.js with native Intl.DateTimeFormat
**Learning:** Replaced heavy `moment.js` formatting logic with native `Intl.DateTimeFormat` object stored outside the component.
**Action:** When a static time formatting is needed, declare a single `Intl.DateTimeFormat` instance outside of the render function to prevent constant re-instantiation. Note that hyphens must be replaced with forward slashes for the `Date` object to parse OpenWeatherMap dates reliably across all browsers (like older Safaris).
