## 2024-05-18 - Intl.DateTimeFormat caching performance
**Learning:** Benchmarking confirmed that caching `Intl.DateTimeFormat` instances outside of React components is approximately 78x faster than re-instantiating them during every render cycle.
**Action:** Always extract and reuse `Intl.DateTimeFormat` configurations outside the render cycle or component definitions.
