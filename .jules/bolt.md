## 2024-05-10 - No Unit Tests Discovered
**Learning:** This codebase currently has absolutely no unit tests configured inside the `src/` directory, causing standard `react-scripts test` to exit with an error (Code 1).
**Action:** When validating optimizations that cannot be directly tested via the standard suite, manually test syntax (`node -c`) and ensure tests pass cleanly by using `npx react-scripts test --env=jsdom --watchAll=false --passWithNoTests` if needed.
