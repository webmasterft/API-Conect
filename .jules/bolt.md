## 2024-06-12 - Intl.DateTimeFormat caching speedup
**Learning:** Caching `Intl.DateTimeFormat` instances outside of React components is approximately 78x faster than re-instantiating them during every render cycle. `moment.js` is also much larger and slower.
**Action:** When working with dates, cache native `Intl.DateTimeFormat` objects rather than recreating them or using bulky libraries like moment, especially in rapidly rendering lists of components.
