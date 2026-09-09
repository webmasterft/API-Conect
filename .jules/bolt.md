## 2024-11-20 - Intl.DateTimeFormat caching is lightning fast
**Learning:** Benchmarking confirmed that caching `Intl.DateTimeFormat` instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Use cached `Intl.DateTimeFormat` instead of moment.js for simple date formatting across the codebase.
