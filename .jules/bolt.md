## 2024-05-23 - Native Date Formatting Performance
**Learning:** Benchmarking confirmed that caching `Intl.DateTimeFormat` instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using `moment.js`. Replacing `moment.js` with `Intl.DateTimeFormat` avoids heavy dependency overhead and improves performance.
**Action:** Use native `Intl.DateTimeFormat` and cache it outside components when formatting dates instead of heavy libraries like `moment.js` when possible.
