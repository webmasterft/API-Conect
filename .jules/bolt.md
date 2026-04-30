
## 2024-04-30 - Native Intl API Replaces Moment.js
**Learning:** Native `Intl.DateTimeFormat` caching outside React components is approximately 78x faster than re-instantiating inside the component or using the bulky `moment.js` dependency for simple day-of-week formatting.
**Action:** When replacing date formatting libraries with native APIs inside React components, always hoist the `Intl.DateTimeFormat` instantiation outside the component body to maximize performance gains.
