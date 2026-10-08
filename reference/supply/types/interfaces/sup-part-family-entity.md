---
title: "SupPartFamilyEntity"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/interfaces/sup-part-family-entity"
bounded_context: "Supply"
kind: "interfaces"
experimental: false
deprecated: false
---

# SupPartFamilyEntity

Shared Fields between [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) and [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md).

### Implemented By

[`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object

```graphql
interface SupPartFamilyEntity {
  applicationIDs: [String!]!
  categoryID: String!
  id: ID!
  keyFeatures: [SupPartFamilyKeyFeature!]!
  manufacturerID: String!
  overview: String!
  subtitle: String!
  tags: [SupPartFamilyTag!]!
  title: String!
}
```

### Fields

#### `applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `categoryID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-key-feature.md) non-null object

#### `manufacturerID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `overview` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `subtitle` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-tag.md) non-null object

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
