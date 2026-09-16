## 2024-11-20 - Intl.DateTimeFormat caching vs moment.js
**Learning:** Instantiating `moment.js` formatting objects inside a React component's render cycle creates a significant performance penalty compared to utilizing a globally cached native `Intl.DateTimeFormat` instance.
**Action:** Always extract and cache native formatter objects (like `Intl.DateTimeFormat` or `Intl.NumberFormat`) outside of the component render path when formatting static or repetitive data, completely replacing heavy libraries like `moment.js` where feasible.
