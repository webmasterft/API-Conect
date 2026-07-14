## 2024-07-14 - Cache Intl.DateTimeFormat vs moment.js
**Learning:** Caching Intl.DateTimeFormat instances outside of React components is significantly faster than re-instantiating them during every render cycle or using moment.js.
**Action:** Use a cached Intl.DateTimeFormat instance instead of moment.js for date formatting to improve rendering performance and reduce bundle size.
