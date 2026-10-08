---
title: "specifiedBy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/directives/specified-by"
bounded_context: "Common"
kind: "directives"
experimental: false
deprecated: false
---

# specifiedBy

The `@specifiedBy` directive is used within the type system definition language to provide a URL for specifying the behavior of custom scalar definitions.

```graphql
directive @specifiedBy(
  url: String!
) on SCALAR
```

### Arguments

#### `url` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The specifiedBy URL points to a human-readable specification. This field will only read a result for scalar types.
