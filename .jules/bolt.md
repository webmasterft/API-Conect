## 2024-06-25 - Caching Intl.DateTimeFormat
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Use cached `Intl.DateTimeFormat` instances instead of moment.js for date formatting to improve performance and reduce bundle size.