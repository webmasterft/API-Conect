## 2025-01-20 - Caching Intl.DateTimeFormat
**Learning:** Instantiating `Intl.DateTimeFormat` during every render cycle (or loop) is significantly slower than using `moment.js` (by order of magnitude). However, caching the `Intl.DateTimeFormat` instance globally or outside the component makes it faster than `moment.js` and avoids heavy library dependencies.
**Action:** Always cache `Intl.DateTimeFormat` instances when using them for formatting in React components or loops to achieve performance gains over heavier libraries like `moment.js`.
