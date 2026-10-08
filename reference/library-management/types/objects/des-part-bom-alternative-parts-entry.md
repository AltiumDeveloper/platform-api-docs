---
title: "DesPartBomAlternativePartsEntry"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-alternative-parts-entry"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartBomAlternativePartsEntry

Represents the alternative parts of a single element.

### Member Of

[`DesPartBomUsage`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-bom-usage.md) object · [`DesPartProjectUsage`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-project-usage.md) object

```graphql
type DesPartBomAlternativePartsEntry {
  alternativePartIds: [ID!]!
  elementId: String!
}
```

### Fields

#### `alternativePartIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

A collection of alternative part identifiers for the element.

#### `elementId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the element.
