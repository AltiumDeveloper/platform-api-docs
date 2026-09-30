---
title: "DesPartProjectUsage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-project-usage"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartProjectUsage

Represents a project usage.

### Member Of

[`DesPartUsages`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-usages.md) object

```graphql
type DesPartProjectUsage {
  alternativeForElementIds: [String!]
  alternativePartsForElementIds: [DesPartBomAlternativePartsEntry!]
  designators: [String!]
  elementIds: [String!]
  id: ID!
  linkedComponentsIds: [ID!]!
  variantId: String
}
```

### Fields

#### `DesPartProjectUsage.alternativeForElementIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of element identifiers that this part is an alternative for.

#### `DesPartProjectUsage.alternativePartsForElementIds` · [`[DesPartBomAlternativePartsEntry!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-alternative-parts-entry.md) list object library-management

A dictionary mapping element identifiers to a collection of alternative part identifiers.

#### `DesPartProjectUsage.designators` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of designators.

#### `DesPartProjectUsage.elementIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

A collection of element identifiers in the BOM.

#### `DesPartProjectUsage.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the BOM.

#### `DesPartProjectUsage.linkedComponentsIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

A collection of linked component identifiers.

#### `DesPartProjectUsage.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the variant.
