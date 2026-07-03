## 2024-06-25 - Replace moment with Intl.DateTimeFormat
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** When formatting dates, prefer the native `Intl.DateTimeFormat` API and cache the instance outside the component render function instead of relying on heavy libraries like `moment.js` which can impact both bundle size and render performance.
