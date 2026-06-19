## 2024-06-19 - Intl.DateTimeFormat vs Moment.js Rendering Performance
**Learning:** Instantiating `moment` inside a functional component's render function is significantly slower (~5.8x) than using a cached `Intl.DateTimeFormat` instance.
**Action:** Always prefer `Intl.DateTimeFormat` over `moment.js` for simple date formatting tasks, and ensure the formatter is instantiated outside the component to avoid costly re-creations during every render cycle. Remember to replace hyphens with slashes in date strings for cross-browser compatibility before passing to `new Date()`.
