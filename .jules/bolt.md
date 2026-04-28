## 2024-10-25 - Caching Intl Formatter
**Learning:** Instantiating `Intl.DateTimeFormat` inside a component render cycle is extremely slow. A simple benchmark showed that caching it outside the component is ~78x faster than `moment` instantiation or re-creating it.
**Action:** Always extract static formatting instances (`Intl`, `NumberFormat`, regexes) outside of React component definitions to prevent expensive re-instantiations on every render.
