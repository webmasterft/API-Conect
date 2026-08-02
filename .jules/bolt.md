## 2023-10-25 - Caching Intl.DateTimeFormat vs Moment.js
**Learning:** Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Use cached `Intl.DateTimeFormat` for performance-critical date formatting instead of `moment` or creating new instances inside the render loop.
