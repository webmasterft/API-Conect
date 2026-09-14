## 2024-05-17 - Replace moment with cached Intl.DateTimeFormat
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (~10x magnitude speedup) than re-instantiating them during every render cycle or using moment.js inside a render cycle.
**Action:** Always prefer caching `Intl.DateTimeFormat` for date formatting inside components rather than instantiating the formatter or calling moment.js on every render loop.
