## 2024-05-18 - Caching Intl.DateTimeFormat

**Learning:** Benchmarking confirmed that caching `Intl.DateTimeFormat` instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js for simple date formatting.
**Action:** Use cached `Intl.DateTimeFormat` instances over `moment.js` for date formatting whenever possible, especially in list/card components rendered multiple times.
