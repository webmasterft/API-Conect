## 2024-05-18 - Optimized date formatting using Intl.DateTimeFormat
**Learning:** Instantiating and formatting dates using `moment.js` is significantly slower than using standard JS `Intl.DateTimeFormat`.
**Action:** When a project heavily uses dates inside render functions or loops, consider avoiding heavy libraries like `moment.js` and prefer caching `Intl.DateTimeFormat` for cross-browser, high-performance date operations.
