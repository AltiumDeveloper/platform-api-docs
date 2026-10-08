---
title: "skip"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/operations/directives/skip"
bounded_context: "Common"
kind: "directives"
experimental: false
deprecated: false
---

# skip

Directs the executor to skip this field or fragment when the `if` argument is true.

```graphql
directive @skip(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```

### Arguments

#### `if` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Skipped when true.
