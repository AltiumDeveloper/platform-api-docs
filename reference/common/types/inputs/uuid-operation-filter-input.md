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

#### `UuidOperationFilterInput.eq` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.gt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.gte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.in` · [`[UUID]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) list scalar common

#### `UuidOperationFilterInput.lt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.lte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.neq` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.ngt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.ngte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.nin` · [`[UUID]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) list scalar common

#### `UuidOperationFilterInput.nlt` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common

#### `UuidOperationFilterInput.nlte` · [`UUID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/uuid.md) scalar common
