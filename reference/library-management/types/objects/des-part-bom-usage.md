---
title: "DesPartBomUsage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartBomUsage

Represents a BOM usage.

### Member Of

[`DesPartUsages`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-usages.md) object

```graphql
type DesPartBomUsage {
  alternativeForElementIds: [String!]
  alternativePartsForElementIds: [DesPartBomAlternativePartsEntry!]
  designators: [String!]
  elementIds: [String!]
  id: ID!
  linkedComponentsIds: [ID!]!
}
```

### Fields

#### `DesPartBomUsage.alternativeForElementIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of element identifiers that this part is an alternative for.

#### `DesPartBomUsage.alternativePartsForElementIds` · [`[DesPartBomAlternativePartsEntry!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-alternative-parts-entry.md) list object library-management

A dictionary mapping element identifiers to a collection of alternative part identifiers.

#### `DesPartBomUsage.designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of designators.

#### `DesPartBomUsage.elementIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of element identifiers in the BOM.

#### `DesPartBomUsage.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the BOM.

#### `DesPartBomUsage.linkedComponentsIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

A collection of linked component identifiers.
