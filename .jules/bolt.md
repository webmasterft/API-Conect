## 2026-04-17 - [Caching Intl.DateTimeFormat in React]
**Learning:** [Benchmarking confirmed that caching 'Intl.DateTimeFormat' instances outside of React components is approximately 78x faster than re-instantiating them during every render. This was discovered when replacing `moment.js` to reduce bundle size.]
**Action:** [Always declare `Intl.DateTimeFormat` or other expensive formatter instances outside the component function when they don't depend on component state or props.]
