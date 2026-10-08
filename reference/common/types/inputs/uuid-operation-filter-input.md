---
title: "UuidOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/uuid-operation-filter-input"
bounded_context: "Common"
kind: "inputs"
experimental: true
deprecated: false
---

# UuidOperationFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`MotorStudioProjectGridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input.md) input

```graphql
input UuidOperationFilterInput {
  eq: UUID
  gt: UUID
  gte: UUID
  in: [UUID]
  lt: UUID
  lte: UUID
  neq: UUID
  ngt: UUID
  ngte: UUID
  nin: [UUID]
  nlt: UUID
  nlte: UUID
}
```

### Fields

#### `eq` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `gt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `gte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `in` · [`[UUID]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) list scalar

#### `lt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `lte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `neq` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `ngt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `ngte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `nin` · [`[UUID]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) list scalar

#### `nlt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar

#### `nlte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar
