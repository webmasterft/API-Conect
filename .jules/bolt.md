
## 2023-10-24 - Replace moment.js with cached Intl.DateTimeFormat
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Replace `moment` with natively supported caching of `Intl.DateTimeFormat` when dealing with string dates to improve date parsing performance.
