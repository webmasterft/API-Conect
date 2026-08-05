## 2024-05-24 - Intl.DateTimeFormat vs Moment.js
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Replace `moment.js` usage with a cached `Intl.DateTimeFormat` instance placed outside the component, and use native `Date` object parsing for better render performance and reduced bundle overhead.
