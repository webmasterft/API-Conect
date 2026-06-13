## 2024-05-18 - Local Time Parsing with `new Date()` Cross-Browser
**Learning:** The OpenWeatherMap API returns `dt_txt` dates in the format `"YYYY-MM-DD HH:MM:SS"`. While Chrome can parse this directly using `new Date("YYYY-MM-DD HH:MM:SS")`, strict ISO 8601 implementations (like Safari) will fail or return `Invalid Date`.
**Action:** When replacing `moment()` (which safely parsed local times) with native `new Date()`, always pre-process the string by replacing dashes with forward slashes (e.g., `.replace(/-/g, "/")`) to guarantee cross-browser compatibility before formatting.
