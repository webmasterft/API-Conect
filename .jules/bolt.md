## 2024-05-24 - Intl.DateTimeFormat caching
**Learning:** Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster than re-instantiating them during every render cycle or using moment.js.
**Action:** Replace moment.js usage in list items with a pre-instantiated Intl.DateTimeFormat object to improve render performance and reduce bundle size dependencies.
