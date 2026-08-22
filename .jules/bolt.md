## 2024-05-18 - [Date formatting performance]
**Learning:** Instantiating and formatting dates using `moment` inside a React component render is significantly slower (~10x in basic loops) than using a cached `Intl.DateTimeFormat` object for the same formatting (weekday string).
**Action:** When rendering lists of items that need basic date formatting like weekdays, replace `moment()` calls with a globally cached `Intl.DateTimeFormat` object to avoid unnecessary parsing and instantiation overhead in the render cycle.
