## 2025-02-23 - Caching Intl.DateTimeFormat
**Learning:** Caching 'Intl.DateTimeFormat' instances outside of React components is significantly faster (orders of magnitude) than re-instantiating them during every render cycle or using moment.js.
**Action:** When migrating away from moment.js, always instantiate and cache 'Intl.DateTimeFormat' outside the component definition to avoid performance degradation during list rendering.
