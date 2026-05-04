## 2024-05-04 - Cache Intl.DateTimeFormat

**Learning:** Caching `Intl.DateTimeFormat` instances outside of React components provides a significant performance boost over re-instantiating them during every render cycle (approx 78x faster). Also, native `Intl.DateTimeFormat` should be preferred over `moment.js` to optimize bundle size and improve runtime performance.

**Action:** Always declare `Intl.DateTimeFormat` formatters outside the React component function when formatting dates, instead of creating new instances inline or using heavy libraries like `moment.js`. Replace hyphens with slashes for cross-browser `Date` parsing compatibility.
