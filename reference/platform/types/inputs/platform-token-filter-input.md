---
title: "PlatformTokenFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# PlatformTokenFilterInput

### Member Of

[`platform.token.byWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/by-workspace.md) query · [`PlatformTokenFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) input

```graphql
input PlatformTokenFilterInput {
  and: [PlatformTokenFilterInput!]
  createdAt: DateTimeOperationFilterInput
  deletedAt: DateTimeOperationFilterInput
  description: StringOperationFilterInput
  expiresAt: DateTimeOperationFilterInput
  name: StringOperationFilterInput
  or: [PlatformTokenFilterInput!]
  updatedAt: DateTimeOperationFilterInput
}
```

### Fields

#### `PlatformTokenFilterInput.and` · [`[PlatformTokenFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) list input platform

#### `PlatformTokenFilterInput.createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

#### `PlatformTokenFilterInput.deletedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

#### `PlatformTokenFilterInput.description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

#### `PlatformTokenFilterInput.expiresAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

#### `PlatformTokenFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

#### `PlatformTokenFilterInput.or` · [`[PlatformTokenFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) list input platform

#### `PlatformTokenFilterInput.updatedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common
