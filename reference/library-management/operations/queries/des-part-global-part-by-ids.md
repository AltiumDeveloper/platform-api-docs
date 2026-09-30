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

```graphql
desPartGlobalPartByIds(
  globalPartIds: [String!]!
): [DesPartGlobalPart]!
```

### Arguments

#### `desPartGlobalPartByIds.globalPartIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The unique identifiers of the global parts.

### Type

#### [`DesPartGlobalPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) object library-management

Represents global the part details.
