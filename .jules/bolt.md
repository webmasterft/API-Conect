## 2026-06-22 - Cached Intl.DateTimeFormat
**Learning:** Instantiating `Intl.DateTimeFormat` is expensive; creating it inside a React component causes a performance hit on every render.
**Action:** Cache instances of `Intl.DateTimeFormat` outside the component to drastically improve performance and minimize bundle size without relying on `moment.js`.
