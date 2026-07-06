## 2024-05-24 - Cached Intl.DateTimeFormat instead of Moment.js
**Learning:** Instantiating `Intl.DateTimeFormat` within a render cycle or using libraries like `moment.js` is significantly slower than using a cached `Intl.DateTimeFormat` instance.
**Action:** Always cache `Intl.DateTimeFormat` instances outside of React components to avoid re-instantiation overhead on every render, especially when replacing expensive libraries like `moment.js` in codebases prioritizing frontend bundle size and render speed.
