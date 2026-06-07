## 2026-06-07 - [Moment vs Intl.DateTimeFormat caching]
**Learning:** Instantiating `moment()` for simple date formatting (like extracting a weekday) inside a render loop is ~10x slower than using a cached `Intl.DateTimeFormat` instance. Cross-browser date parsing from strings like 'YYYY-MM-DD HH:mm:ss' works cleanly by replacing hyphens with slashes.
**Action:** Always prefer cached `Intl.DateTimeFormat` over `moment.js` for simple, localized date formatting in React components, keeping the formatter instance outside the component to avoid re-creation overhead on every render.
