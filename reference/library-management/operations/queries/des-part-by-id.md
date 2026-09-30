---
title: "desPartById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartById

Gets a part by its identifier.

```graphql
desPartById(
  id: ID!
  requestPaidData: Boolean
): DesPart
```

### Arguments

#### `desPartById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifier of the part.

#### `desPartById.requestPaidData` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies whether paid data from \*SiliconExpert\* or \*Z2Data\* is requested. When set to true, the provider quota is consumed.

### Type

#### [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object library-management

Represents a part.
