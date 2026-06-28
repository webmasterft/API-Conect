## 2024-05-19 - Intl.DateTimeFormat Date Parsing Quirk
**Learning:** Using `Intl.DateTimeFormat` with strings in the format `YYYY-MM-DD HH:mm:ss` requires replacing hyphens with forward slashes (`.replace(/-/g, "/")`) to avoid cross-browser compatibility issues in the `Date` constructor.
**Action:** Always preprocess date strings by replacing hyphens with forward slashes when constructing `Date` objects in this project.
