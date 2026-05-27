## 2026-05-27 - [Remove moment.js for Intl.DateTimeFormat]
**Learning:** Caching 'Intl.DateTimeFormat' outside of React components avoids the extremely expensive overhead of moment.js during render cycles, reducing bundle size and improving component rendering speeds substantially.
**Action:** Always prefer native APIs with cached instances for simple formatting over heavy libraries like moment.js in frontend components.
