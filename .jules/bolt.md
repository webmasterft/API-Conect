## 2024-05-18 - [Intl.DateTimeFormat vs moment.js for Date Formatting]
**Learning:** Replacing `moment.js` with a cached `Intl.DateTimeFormat` instance outside the React component prevents expensive re-initialization on every render and significantly reduces bundle size.
**Action:** Use native `Intl.DateTimeFormat` instead of large libraries like `moment.js` for simple date formatting tasks, and always cache the formatter instance outside the component if possible.
