## 2024-05-18 - [Date formatting performance bottleneck in lists]
**Learning:** Using `moment.js` inline during React list rendering creates massive overhead by repeatedly instantiating large objects, significantly degrading render performance compared to using a single cached instance of native `Intl.DateTimeFormat`.
**Action:** Always prefer native `Intl.DateTimeFormat` (cached outside the component render function) over `moment.js` when formatting dates, especially inside `.map()` loops or other list renderings.
