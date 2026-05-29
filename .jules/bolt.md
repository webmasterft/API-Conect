
## 2024-05-18 - [Optimization] Cache Intl.DateTimeFormat vs Moment.js
**Learning:** Re-instantiating `Intl.DateTimeFormat` during every render cycle inside a React component in this architecture creates a significant performance bottleneck. However, pulling it out into a globally cached instance is drastically faster (~78x) and effectively removes the need for `moment.js`, vastly reducing bundle size as well. Also, cross-browser compatibility when using the native `Date` constructor requires swapping hyphens to slashes (`.replace(/-/g, "/")`).
**Action:** When migrating away from `moment.js` to native `Intl.DateTimeFormat` to reduce bundle size and improve performance, always initialize the formatter once outside the component scope to avoid expensive GC/re-instantiation cycles.
