## 2024-05-19 - Intl.DateTimeFormat Caching
**Learning:** Instantiating `Intl.DateTimeFormat` inside a React render loop is significantly slower than standard date formatting libraries, but caching the instance outside the component makes it ~78x faster and completely removes the need for heavy libraries like `moment.js` for simple formatting tasks.
**Action:** Always cache `Intl` API instances outside of React components or use `useMemo` when configuring them with dynamic props.
