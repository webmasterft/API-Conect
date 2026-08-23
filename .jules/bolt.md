## 2026-08-23 - [Date Formatting Performance]
**Learning:** Caching `Intl.DateTimeFormat` outside of React components is orders of magnitude faster than re-instantiating on every render cycle or using `moment.js` for simple formatting tasks in this codebase.
**Action:** Always extract and cache `Intl.DateTimeFormat` instances for repetitive date formatting instead of using heavy libraries like `moment` or creating new formatter instances inline. Ensure to `.replace(/-/g, "/")` when parsing OpenWeatherMap string dates for cross-browser support.
