## 2026-05-21 - Caching Intl.DateTimeFormat in React Components
**Learning:** Instantiating `Intl.DateTimeFormat` during every render cycle of a mapped component (like a list of weather cards) causes significant performance overhead compared to caching it outside the component.
**Action:** Always extract and cache `Intl.DateTimeFormat` instances outside of React components when formatting dates in lists, taking care to replace hyphens with forward slashes (e.g. `replace(/-/g, "/")`) when parsing API date strings like "YYYY-MM-DD HH:mm:ss" for cross-browser compatibility.
