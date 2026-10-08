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

### Type

#### [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object

Represents a part.

```graphql
desPartByIds(
  ids: [ID!]!
  requestPaidData: Boolean
): [DesPart]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifiers of the parts.

#### `requestPaidData` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies whether paid data from \*SiliconExpert\* or \*Z2Data\* is requested. When set to true, the provider quota is consumed.
