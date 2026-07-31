## 2024-10-25 - Caching Intl.DateTimeFormat vs moment.js
**Learning:** Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** When basic date formatting is needed (like getting the day name), replace moment.js with a cached Intl.DateTimeFormat instance to avoid both the library overhead and the runtime instantiation cost inside components.
