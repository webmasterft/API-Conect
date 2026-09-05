## 2024-05-18 - Intl.DateTimeFormat caching vs moment.js
**Learning:** Instantiating moment.js objects during render is significantly slower than using a cached Intl.DateTimeFormat instance.
**Action:** Always prefer native Intl formatters instantiated outside the render cycle for simple date formatting.
