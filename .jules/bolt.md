## 2024-10-23 - Caching Intl.DateTimeFormat is orders of magnitude faster than moment.js
**Learning:** Re-instantiating date formatters during every render cycle or using moment.js is a significant performance bottleneck.
**Action:** Cache `Intl.DateTimeFormat` instances outside of React components for frequently rendered date formats.
