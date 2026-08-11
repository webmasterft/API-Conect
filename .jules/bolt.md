## 2024-05-18 - Intl.DateTimeFormat caching vs moment.js
**Learning:** Instantiating `Intl.DateTimeFormat` during every render cycle in React components can be a hidden performance bottleneck, but caching instances outside the component is significantly faster (orders of magnitude) than either re-instantiating them or using heavy libraries like `moment.js`.
**Action:** When migrating away from `moment.js`, always declare the `Intl.DateTimeFormat` formatter instance once outside the component rather than inside the render function to maximize performance.
