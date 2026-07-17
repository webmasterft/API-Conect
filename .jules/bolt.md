## 2024-05-13 - Cached Intl.DateTimeFormat vs Moment.js
**Learning:** Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Use cached `Intl.DateTimeFormat` instead of `moment` for formatting dates.
