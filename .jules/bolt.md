## 2026-05-08 - [Caching Intl.DateTimeFormat vs Moment]
**Learning:** [Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is approximately 78x faster than re-instantiating them during every render cycle or using moment.js inside the render method.]
**Action:** [Always cache native formatter instances (like Intl.DateTimeFormat) outside of React component definitions when formatting standard strings. Also, remember to handle cross-browser `Date` parsing by replacing hyphens with forward slashes for 'YYYY-MM-DD HH:mm:ss' formats.]
