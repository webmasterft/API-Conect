## 2024-03-24 - [Intl.DateTimeFormat Optimization]
**Learning:** Instantiating `Intl.DateTimeFormat` during every render cycle of a React component can cause significant performance degradation. The native API is much faster than `moment.js`, but caching the formatter instance is necessary to fully realize its benefits.
**Action:** When replacing heavy date libraries with `Intl.DateTimeFormat` in React components, always declare the formatter instance outside the component to prevent expensive re-instantiations on each render.
