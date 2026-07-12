
## 2024-05-19 - [DateTimeFormat caching vs moment.js]
**Learning:** Caching `Intl.DateTimeFormat` instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js, especially in lists. Also learned that `Date` parsing of 'YYYY-MM-DD HH:mm:ss' strings requires replacing hyphens with slashes for cross-browser compatibility.
**Action:** Always prefer native `Intl` API over heavy libraries like `moment.js` for simple formatting, and always cache formatter instances outside the render cycle if they are reused.
