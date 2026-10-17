---
title: "desPartGlobalPartByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-part-by-ids"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desPartGlobalPartByIds

Gets global parts by their identifiers.

### Type

#### [`DesPartGlobalPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) object

Represents global the part details.

```graphql
desPartGlobalPartByIds(
  globalPartIds: [String!]!
  requestPaidData: Boolean
): [DesPartGlobalPart]!
```

### Arguments

#### `globalPartIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The unique identifiers of the global parts.

#### `requestPaidData` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Specifies whether paid data from \*SiliconExpert\* or \*Z2Data\* is requested. When set to true, the provider quota is consumed.
