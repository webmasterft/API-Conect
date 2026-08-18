## 2024-05-18 - [Date Formatting Performance]
**Learning:** Native `Intl.DateTimeFormat` instances are significantly faster than using `moment.js` when cached outside of React component render methods, avoiding expensive re-instantiations on every render.
**Action:** Replace `moment.js` imports with cached `Intl.DateTimeFormat` configurations for simple date formatting tasks throughout the codebase to improve render performance.
