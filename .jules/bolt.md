## 2023-10-24 - [Intl.DateTimeFormat vs Moment.js in React]
**Learning:** Using `moment.js` inside functional components or `render()` methods causes excessive memory allocation and slow rendering due to re-instantiation on every render cycle. Native `Intl.DateTimeFormat` is significantly faster but must be declared outside the component to maximize performance.
**Action:** Always prefer native `Intl.DateTimeFormat` over `moment.js` for simple date formatting in React. Declare the formatter instance outside the component scope to ensure it is only instantiated once.
