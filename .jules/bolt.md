## 2023-10-25 - Replace moment with Intl.DateTimeFormat
**Learning:** Caching `Intl.DateTimeFormat` instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** Always prefer `Intl.DateTimeFormat` over `moment.js` for simple date formatting in React apps, and cache the formatter instances outside the components.
