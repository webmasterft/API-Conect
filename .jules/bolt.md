## 2024-05-20 - Intl.DateTimeFormat Caching
**Learning:** Instantiating moment.js inside a React component's render cycle, especially within list items like cards, is significantly slower than caching a native `Intl.DateTimeFormat` instance outside the component.
**Action:** Always extract and cache native formatters (like Intl.DateTimeFormat) outside of React render cycles instead of re-instantiating them or using heavy libraries like moment.js.
