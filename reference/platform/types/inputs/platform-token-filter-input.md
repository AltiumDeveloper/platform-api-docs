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

#### `and` · [`[PlatformTokenFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) list input

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `deletedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

#### `expiresAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

#### `or` · [`[PlatformTokenFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) list input

#### `updatedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input
