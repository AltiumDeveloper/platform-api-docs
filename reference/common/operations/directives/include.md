---
title: "include"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/operations/directives/include"
bounded_context: "Common"
kind: "directives"
experimental: false
deprecated: false
---

# include

Directs the executor to include this field or fragment only when the `if` argument is true.

```graphql
directive @include(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```

### Arguments

#### `if` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Included when true.
