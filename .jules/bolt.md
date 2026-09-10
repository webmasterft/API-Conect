
## 2024-11-20 - Cache Intl.DateTimeFormat
**Learning:** Re-instantiating Intl.DateTimeFormat in React components on every render can be slow; caching it outside is an order of magnitude faster than moment.js.
**Action:** Extract Intl.DateTimeFormat instances outside the component when possible.
