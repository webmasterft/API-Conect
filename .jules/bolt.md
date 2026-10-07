## 2026-10-07 - Date Formatting Optimization
**Learning:** In React components like `Card` that render frequently, instantiating `moment.js` or native formatters on every render is a significant bottleneck compared to using a single, globally cached `Intl.DateTimeFormat` instance. Also discovered that `Date` parsing on `YYYY-MM-DD HH:mm:ss` strings requires replacing hyphens with slashes for cross-browser safety.
**Action:** Always prefer cached `Intl.DateTimeFormat` over `moment.js` for simple date displays, and cache the formatter outside the component scope.
