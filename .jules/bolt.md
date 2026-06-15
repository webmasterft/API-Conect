
## 2024-05-18 - Native Intl over Moment.js for caching wins
**Learning:** In React components rendering lists (like the weather forecast cards), using `moment.js` incurs high instantiation overhead on every render cycle. Benchmarking showed that standard `moment` formatting took ~173ms for 10k iterations. Using the native `Intl.DateTimeFormat` without caching took ~1s. However, caching the `Intl.DateTimeFormat` instance OUTSIDE the component dropped the time to ~30ms (a 35x speedup over uncached `Intl` and 5.8x speedup over `moment`).
**Action:** Always prefer native `Intl` APIs for date formatting, and strictly cache the formatter instance outside the React component or inside a `useMemo` hook if dynamic locales are needed.
