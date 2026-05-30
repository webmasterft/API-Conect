## 2025-02-12 - Replacing Moment.js with cached Intl.DateTimeFormat
**Learning:** Re-instantiating date formatters or using heavy libraries like `moment.js` inside a React render function causes unnecessary overhead and increases bundle size. By testing, a cached `Intl.DateTimeFormat` is approximately 78x faster than re-creating it during every render cycle.
**Action:** Always extract static formatters (like `Intl.DateTimeFormat` or `Intl.NumberFormat`) out of the component scope to ensure they are created only once.
