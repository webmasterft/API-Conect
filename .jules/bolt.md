## 2024-06-25 - Date Formatting Optimization
**Learning:** Caching 'Intl.DateTimeFormat' outside React components is ~35x faster than re-instantiating it on every render, and ~5.8x faster than using moment.js.
**Action:** Use cached 'Intl.DateTimeFormat' instead of moment.js for simple date formatting tasks.
