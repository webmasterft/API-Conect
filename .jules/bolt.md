## 2024-05-18 - Intl.DateTimeFormat caching beats moment.js
**Learning:** Instantiating `moment` inside a React render function for simple date string formatting (like extracting weekday names) is significantly slower (orders of magnitude) than using a cached `Intl.DateTimeFormat` instance.
**Action:** When basic date formatting is required, prefer the native `Intl` API and always cache the formatter instance outside the component scope to avoid unnecessary object allocation during renders.
