## 2024-05-18 - Replacing moment.js with cached Intl.DateTimeFormat
**Learning:** Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js for simple date formatting.
**Action:** Use cached `Intl.DateTimeFormat` for date formatting instead of heavy libraries like `moment.js` when only simple string formatting is required, and define the formatter instance outside the component to avoid recreation on re-renders.
