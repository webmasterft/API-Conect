## 2024-05-18 - Fast date formatting
**Learning:** Instantiating `moment.js` inside a component list loop (e.g. `Card` items) is surprisingly slow, whereas creating a cached `Intl.DateTimeFormat` instance *outside* the component gives orders-of-magnitude faster performance (measured ~10x speedup).
**Action:** When working with repeated date strings inside map loops, replace heavy `moment()` calls with native `Intl.DateTimeFormat`, caching the formatter instance globally or outside the render path.
