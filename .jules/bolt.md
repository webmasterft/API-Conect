## 2024-03-24 - Avoid moment.js and in-component Intl.DateTimeFormat instantiations

**Learning:** Benchmarking and profiling indicate that creating a new `Intl.DateTimeFormat` instance during every render cycle (or using heavier libraries like `moment.js` just for simple date formatting) is a major performance anti-pattern in React components. `Intl.DateTimeFormat` is natively fast but its instantiation can be costly when invoked repeatedly within a list (like in `cards.js` where multiple forecast items are rendered).

**Action:** Whenever formatting dates in a frequently rendered component, always instantiate `Intl.DateTimeFormat` once, outside the component function (or cache it using a module-level variable), and use the cached instance to `.format()` dates inside the component. Also ensure date strings with hyphens are normalized to slashes (e.g., `.replace(/-/g, "/")`) to avoid cross-browser `Date` parsing issues when avoiding moment.js.
