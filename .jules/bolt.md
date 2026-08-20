## 2024-10-25 - Caching Intl.DateTimeFormat
**Learning:** Instantiating `Intl.DateTimeFormat` during every render cycle in React components is very slow. Moment.js is also heavier and slower.
**Action:** Always cache `Intl.DateTimeFormat` instances outside the component when formatting dates for better performance, and avoid Moment.js where native Intl APIs suffice. Always replace hyphens with slashes when parsing `YYYY-MM-DD HH:mm:ss` date strings for cross-browser parsing compatibility.
