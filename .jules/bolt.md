
## 2024-11-20 - Moment.js vs Intl.DateTimeFormat
**Learning:** Instantiating `Intl.DateTimeFormat` on every render is expensive. Caching it outside the component is significantly faster (benchmarked at ~78x faster). Also, native `new Date()` parsing requires `replace(/-/g, "/")` for cross-browser compatibility when dealing with OpenWeatherMap's date format.
**Action:** When replacing moment.js with native `Intl.DateTimeFormat` in React components, always declare the formatter instance outside the component scope to avoid render overhead.
