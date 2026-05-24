## 2024-06-25 - Date Parsing in Older React Apps
**Learning:** In older React apps (like this CRA v3), date strings from external APIs (like OpenWeatherMap's "YYYY-MM-DD HH:mm:ss") may fail to parse correctly with native `new Date()` in older browsers (like Safari). Relying solely on `Intl.DateTimeFormat` might expose this if the input string isn't normalized first.
**Action:** Always normalize date strings with hyphens to forward slashes (e.g., `.replace(/-/g, "/")`) before passing them to the native `Date` constructor when replacing `moment.js` to ensure cross-browser compatibility.

## 2024-06-25 - React Component Re-render Bottleneck with Intl
**Learning:** Re-instantiating `Intl.DateTimeFormat` inside a React component's render function (like `Card` in lists) is extremely expensive and can negate the bundle size benefits of removing `moment.js`. Benchmarks showed caching it outside the component is ~78x faster.
**Action:** Always declare and cache `Intl.DateTimeFormat` instances outside of React component functions to avoid expensive re-instantiations during re-renders.
