---
title: "desPartByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-ids"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartByIds

Gets parts by their identifiers.

```graphql
desPartByIds(
  ids: [ID!]!
  requestPaidData: Boolean
): [DesPart]!
```

### Arguments

#### `desPartByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The unique identifiers of the parts.

#### `desPartByIds.requestPaidData` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Specifies whether paid data from \*SiliconExpert\* or \*Z2Data\* is requested. When set to true, the provider quota is consumed.

### Type

#### [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object library-management

Represents a part.
