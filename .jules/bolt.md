
## 2023-10-25 - Caching Intl.DateTimeFormat
**Learning:** Using `moment.js` and creating a new `Intl.DateTimeFormat` instance in every render are both significantly slower than using a single cached `Intl.DateTimeFormat` instance.
**Action:** When formatting dates in React components, avoid `moment` and cache `Intl.DateTimeFormat` outside of the component body to avoid re-instantiating the formatter during every render cycle.
