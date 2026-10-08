---
title: "PathFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/path-filter-input"
bounded_context: "Common"
kind: "inputs"
experimental: true
deprecated: false
---

# PathFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input · [`PathFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/path-filter-input.md) input

```graphql
input PathFilterInput {
  and: [PathFilterInput!]
  count: IntOperationFilterInput
  isEmpty: BooleanOperationFilterInput
  or: [PathFilterInput!]
}
```

### Fields

#### `and` · [`[PathFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/path-filter-input.md) list input

#### `count` · [`IntOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/int-operation-filter-input.md) input

#### `isEmpty` · [`BooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/boolean-operation-filter-input.md) input

#### `or` · [`[PathFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/path-filter-input.md) list input
