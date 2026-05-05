## 2024-05-05 - Safari Date Parsing Limitation
**Learning:** Safari historically struggles with `new Date("YYYY-MM-DD HH:mm:ss")` formats using dashes, returning an `Invalid Date`.
**Action:** When replacing moment.js with native Date parsing for API strings in this format, always apply `.replace(/-/g, "/")` before passing the string to the `Date` constructor to ensure cross-browser compatibility.
