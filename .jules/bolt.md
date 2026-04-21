## 2026-04-21 - [Intl.DateTimeFormat vs Moment.js performance]
**Learning:** Re-instantiating `Intl.DateTimeFormat` on every component render in React is extremely slow. Benchmarking showed that caching a single instance of `Intl.DateTimeFormat` outside the component scope is approximately 78x faster than re-instantiating it or using `moment()`.
**Action:** Always declare `Intl.DateTimeFormat` instances outside of React components or memoize them using `useMemo` with an empty dependency array to avoid the high overhead of instantiation during the render cycle.
