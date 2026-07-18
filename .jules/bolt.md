## 2024-05-14 - Replace moment.js with cached Intl.DateTimeFormat
**Learning:** Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Use cached `Intl.DateTimeFormat` instances instead of heavyweight date libraries like moment.js for simple date formatting tasks inside frequent render paths to improve performance.
